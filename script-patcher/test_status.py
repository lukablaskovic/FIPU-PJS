import tempfile
import unittest
from pathlib import Path
from datetime import date
from build_status import updated_date, build, SCRIPTS, ROOT

class StatusTests(unittest.TestCase):
    def test_dates(self):
        self.assertEqual(updated_date('**🆙 Posljednje ažurirano: 3. 2. 2026.**'), date(2026, 2, 3))
        for text in ('', '**🆙 Posljednje ažurirano: 31.2.2026.**',
                     '**🆙 Posljednje ažurirano: 1.1.2026.**\n' * 2):
            with self.assertRaises(ValueError):
                updated_date(text)

    def test_actual_lessons(self):
        with tempfile.TemporaryDirectory() as folder:
            build(Path(folder))
            page = (Path(folder) / 'index.html').read_text()
            self.assertEqual(page.count('<time datetime='), len(SCRIPTS))
            for script in SCRIPTS:
                self.assertIn(f'data-script="{script}"', page)
            self.assertNotIn('{{', page)
            self.assertNotIn('token.json', page)

    def test_publish_after_sync(self):
        workflow = (ROOT / '.github/workflows/sync-drive.yml').read_text()
        self.assertLess(workflow.index('run: python -u script-patcher/index.py'), workflow.index('name: Build script status page'))
        self.assertLess(workflow.index('git push origin HEAD:main'), workflow.index('name: Build script status page'))
        self.assertIn('needs: sync', workflow)
        self.assertIn('path: _site', workflow)

if __name__ == '__main__':
    unittest.main()
