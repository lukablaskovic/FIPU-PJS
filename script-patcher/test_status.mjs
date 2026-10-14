import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const output = mkdtempSync(join(tmpdir(), 'course-status-'));
let browser;
try {
 execFileSync('python3', [fileURLToPath(new URL('build_status.py', import.meta.url)), '--output', output]);
 browser = await chromium.launch({ headless: true });
 const page = await browser.newPage();
 const url = pathToFileURL(join(output, 'index.html')).href;
 for (const width of [1100, 375]) {
  await page.setViewportSize({ width, height: 900 });
  await page.goto(url);
  const scripts = await page.locator('[data-script]').evaluateAll(rows => rows.map(row => row.dataset.script));
  assert.ok(scripts.length >= 5);
  assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  for (const script of scripts) {
   await page.goto(url + '?script=' + script);
   assert.equal(await page.locator('li:visible').count(), 1);
   assert.equal(await page.locator('li:visible').getAttribute('data-script'), script);
   assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  }
 }
 await page.goto(url + '?script=invalid');
 assert.equal(await page.locator('li:visible').count(), 0);
 assert.ok(await page.locator('#error').isVisible());
 await page.locator('#error a').click();
 assert.ok(await page.locator('li:visible').count() >= 5);
 console.log('Status overview, every embed, mobile overflow and unknown-script recovery passed.');
} finally {
 await browser?.close();
 rmSync(output, { recursive: true, force: true });
}
