import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { assetPath, prepareDocument } from './render-pdfs.mjs';
import { chromium } from 'playwright';

for (const url of [
  'https://course.invalid/WA1%20-%20Uvod/slika.png',
  'https://raw.githubusercontent.com/lukablaskovic/FIPU-PJS/main/WA1%20-%20Uvod/slika.png?v=1',
  'https://raw.githubusercontent.com/lukablaskovic/FIPU-PJS/refs/heads/main/WA1%20-%20Uvod/slika.png',
  'https://github.com/lukablaskovic/FIPU-PJS/blob/main/WA1%20-%20Uvod/slika.png?raw=true',
]) assert.equal(assetPath(url), 'WA1 - Uvod/slika.png');
assert.equal(assetPath('https://raw.githubusercontent.com/other/repo/main/image.png'), null);
assert.equal(assetPath('https://example.com/image.png'), null);
assert.equal(assetPath('https://course.invalid/posluz%CC%8Citelj.png'), 'poslužitelj.png');
const html = execFileSync('pandoc', ['--from=markdown+autolink_bare_uris+hard_line_breaks+gfm_auto_identifiers', '--to=html5'], {
  input: '# 1. Uvod\n\nAsistent\nUstanova\n\n<details>\n<summary>Primjer</summary>\n\n```js\nconsole.log("čćžšđ");\n```\n\n</details>', encoding: 'utf8',
});
assert.match(html, /id="1-uvod"/);
assert.match(html, /Asistent<br\s*\/>\s*Ustanova/);
assert.match(html, /<details>/);
assert.match(html, /čćžšđ/);
assert.doesNotMatch(html, /```/);
const browser = await chromium.launch();
try {
  const page = await browser.newPage({ javaScriptEnabled: false });
  await page.setContent('<a href="#vježba-">Vježba 🍕</a><h2 id="vježba-pizza">Vježba 🍕</h2><details><summary>Primjer</summary>Rješenje</details>');
  await page.evaluate(prepareDocument);
  assert.equal(await page.locator('a').getAttribute('href'), '#vježba-pizza');
  assert.equal(await page.locator('details').getAttribute('open'), '');
} finally {
  await browser.close();
}
console.log('PDF asset checks passed.');
