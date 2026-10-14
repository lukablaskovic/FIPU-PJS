"""Build the public lesson status page without network access or credentials."""
import argparse
from datetime import date
from html import escape
from pathlib import Path
import re
from urllib.parse import quote

from index import ROOT, SCRIPTS, FOLDER_ID, course_files

TITLES = {'UPP': 'Upravljanje poslovnim procesima', 'OS': 'Operacijski sustavi',
          'PJS': 'Programiranje u skriptnim jezicima', 'WA': 'Web aplikacije',
          'RS': 'Raspodijeljeni sustavi'}


def updated_date(text):
    matches = re.findall(r'^\*\*🆙 Posljednje ažurirano: (\d{1,2})\.\s*(\d{1,2})\.\s*(\d{4})\.\*\*\s*$', text, re.M)
    if len(matches) != 1:
        raise ValueError('Expected exactly one last-updated date in the lesson header.')
    day, month, year = map(int, matches[0])
    return date(year, month, day)


def build(output):
    prefix = re.sub(r'\d+$', '', SCRIPTS[0])
    title = TITLES[prefix]
    repo = f'https://github.com/lukablaskovic/FIPU-{prefix}'
    rows = []
    for script in SCRIPTS:
        markdown, pdf = course_files(script=script)
        updated = updated_date(markdown.read_text(encoding='utf-8'))
        # RS8 uses a special filename; its folder still carries the lesson title.
        name = markdown.stem if markdown.stem.startswith(script + ' - ') else markdown.parent.name
        name = name.removeprefix(script + ' - ')
        md_url = repo + '/blob/main/' + quote(markdown.relative_to(ROOT).as_posix())
        pdf_url = repo + '/blob/main/' + quote(pdf.relative_to(ROOT).as_posix())
        rows.append(f'''<li data-script="{script}">
<div><h2><span>{script}</span> {escape(name)}</h2>
<p>Posljednje ažurirano: <time datetime="{updated.isoformat()}">{updated.day}. {updated.month}. {updated.year}.</time></p></div>
<nav aria-label="Materijali {script}"><a href="{pdf_url}" target="_blank" rel="noopener">PDF (GitHub)</a><a href="{md_url}" target="_blank" rel="noopener">Skripta</a><a class="detail" href="?script={script}">Izdvojeni prikaz</a></nav></li>''')
    template = Path(__file__).with_name('status.html').read_text(encoding='utf-8')
    page = template.replace('{{TITLE}}', escape(title)).replace('{{ROWS}}', '\n'.join(rows))
    page = page.replace('{{DRIVE}}', f'https://drive.google.com/drive/folders/{FOLDER_ID}')
    output.mkdir(parents=True, exist_ok=True)
    (output / 'index.html').write_text(page, encoding='utf-8')
    print(f'{prefix}: {len(rows)} lesson dates → {output / "index.html"}')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', type=Path, default=ROOT / '_site')
    build(parser.parse_args().output)
