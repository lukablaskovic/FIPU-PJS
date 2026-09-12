import hashlib
import io
import unicodedata
from pathlib import Path

MIME_TYPES = {'.md': 'text/markdown', '.pdf': 'application/pdf'}


def upload_plan(paths, remote_files):
    remote = {}
    for item in remote_files:
        name = unicodedata.normalize('NFC', item['name'])
        remote.setdefault(name, []).append(item)
    plan = []
    for path in paths:
        path = Path(path)
        if path.suffix.lower() not in MIME_TYPES or path.is_symlink():
            raise ValueError(f'Only regular Markdown/PDF files may be uploaded: {path}')
        matches = remote.get(unicodedata.normalize('NFC', path.name), [])
        if len(matches) > 1:
            raise ValueError(f'Duplicate Drive filename: {path.name}')
        existing = matches[0] if matches else None
        if existing and existing['mimeType'].startswith('application/vnd.google-apps.'):
            raise ValueError(f'Refusing to overwrite a native Google file: {path.name}')
        before = path.stat()
        data = path.read_bytes()
        after = path.stat()
        if (before.st_mtime_ns, before.st_size) != (after.st_mtime_ns, after.st_size):
            raise ValueError(f'File changed while reading; retry after saving: {path}')
        digest = hashlib.md5(data).hexdigest()
        if not existing or existing.get('md5Checksum') != digest:
            plan.append((path, existing, data, digest))
    return plan


class GoogleDriveAPI:
    def __init__(self, folder_id, auth_function):
        self.Drive_service = auth_function()
        self.folder_id = folder_id

    def list_files_in_folder(self):
        files, page_token = [], None
        while True:
            result = self.Drive_service.files().list(
                q=f"'{self.folder_id}' in parents and trashed = false",
                fields='nextPageToken,files(id,name,mimeType,md5Checksum)',
                pageToken=page_token, pageSize=1000).execute()
            files.extend(result.get('files', []))
            page_token = result.get('nextPageToken')
            if not page_token:
                return files

    def sync_files(self, paths, dry_run=False):
        plan = upload_plan(paths, self.list_files_in_folder())
        for path, existing, data, digest in plan:
            action = 'Update' if existing else 'Create'
            print(f"{'[dry run] ' if dry_run else ''}{action}: {path.name}", flush=True)
            if dry_run:
                continue
            from googleapiclient.http import MediaIoBaseUpload
            media = MediaIoBaseUpload(io.BytesIO(data), mimetype=MIME_TYPES[path.suffix.lower()], resumable=True)
            if existing:
                result = self.Drive_service.files().update(
                    fileId=existing['id'], media_body=media, fields='id,md5Checksum').execute()
            else:
                result = self.Drive_service.files().create(
                    body={'name': path.name, 'parents': [self.folder_id]},
                    media_body=media, fields='id,md5Checksum').execute()
            if result.get('md5Checksum') != digest:
                raise RuntimeError(f'Drive checksum verification failed: {path.name}')
        if not plan:
            print('All selected files are up to date.', flush=True)
