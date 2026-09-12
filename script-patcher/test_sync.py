import hashlib
import os
import tempfile
import unicodedata
from pathlib import Path
from unittest.mock import patch

from GoogleDriveAPI import upload_plan
from index import authenticate_google_drive, course_files, SCRIPTS, PREFIX, FOLDER_PATTERN, SPECIAL_STEMS


def test_sync():
    with patch.dict(os.environ, {'GITHUB_ACTIONS': 'true', 'GOOGLE_DRIVE_TOKEN_JSON': ''}):
        try:
            authenticate_google_drive()
        except ValueError as error:
            assert 'GOOGLE_DRIVE_TOKEN_JSON' in str(error)
        else:
            raise AssertionError('CI must fail without credentials')
    with tempfile.TemporaryDirectory() as directory:
        root = Path(directory)
        for script in SCRIPTS:
            name = FOLDER_PATTERN.format(script=script, number=script[len(PREFIX):]).replace('*', 'Poslužitelj')
            folder = root / name
            folder.mkdir()
            stem = SPECIAL_STEMS.get(script, script + ' - Poslužitelj')
            (folder / (stem + '.md')).write_bytes(b'old')
            (folder / unicodedata.normalize('NFD', stem.upper() + '.pdf')).write_bytes(b'old')
            (folder / 'extra.pdf').write_bytes(b'not a lesson')
            (folder / 'server.js').write_text('code')
            (folder / 'app').mkdir()
            (folder / 'app' / (stem + '.md')).write_text('nested code documentation')
        paths = course_files(root)
        assert len(paths) == len(SCRIPTS) * 2
        for i, script in enumerate(SCRIPTS):
            assert course_files(root, script=script) == paths[i * 2:i * 2 + 2]
        for invalid in ('', PREFIX + '0', PREFIX + '99', '../' + SCRIPTS[0]):
            try:
                course_files(root, script=invalid)
            except ValueError:
                pass
            else:
                raise AssertionError('Invalid selector was accepted')
        remote = [{'id': str(i), 'name': unicodedata.normalize('NFC', p.name),
                   'mimeType': 'application/pdf' if p.suffix == '.pdf' else 'text/markdown',
                   'md5Checksum': hashlib.md5(b'old').hexdigest()} for i, p in enumerate(paths)]
        assert upload_plan(paths, remote) == []
        paths[0].write_bytes(b'changed')
        plan = upload_plan(paths, remote)
        assert len(plan) == 1 and plan[0][1]['id'] == '0' and plan[0][2] == b'changed'
        assert len(upload_plan(paths, [])) == len(paths)
        for bad_paths, bad_remote in [([paths[0].parent / 'server.js'], []), (paths, remote + [remote[0]])]:
            try:
                upload_plan(bad_paths, bad_remote)
            except ValueError:
                pass
            else:
                raise AssertionError('Unsafe upload was accepted')
        paths[0].unlink()
        assert course_files(root, script=SCRIPTS[1]) == paths[2:4]
        try:
            course_files(root)
        except ValueError:
            pass
        else:
            raise AssertionError('Missing lesson was accepted')
    print('Sync checks passed.')


if __name__ == '__main__':
    test_sync()
