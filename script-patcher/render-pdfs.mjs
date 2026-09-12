import { execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, mkdtempSync, rmSync, lstatSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { chromium } from 'playwright';

const directory = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(directory);
const extensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ttf']);

// Resolve this repository's GitHub image URLs against the current checkout.
export function assetPath(url) {
  const parsed = new URL(url);
  let name = decodeURIComponent(parsed.pathname).normalize('NFC');
  if (parsed.hostname === 'course.invalid') return name.slice(1);
  if (parsed.hostname === 'raw.githubusercontent.com') {
    name = name.replace(/^\/lukablaskovic\/FIPU-PJS\/(?:refs\/heads\/)?main\//, '');
  } else if (parsed.hostname === 'github.com') {
    name = name.replace(/^\/lukablaskovic\/FIPU-PJS\/(?:blob|raw)\/(?:refs\/heads\/)?main\//, '');
  }
  return name.startsWith('/') ? null : name;
}

export function prepareDocument() {
  document.querySelectorAll('details').forEach(item => { item.open = true; });
  const text = item => item.textContent.replace(/\s+/g, ' ').trim();
  const headings = [...document.querySelectorAll('h1, h2, h3, h4, h5, h6')];
  for (const link of document.querySelectorAll('a[href^="#"]')) {
    if (document.getElementById(decodeURIComponent(link.getAttribute('href').slice(1)))) continue;
    // Pandoc spells emoji out in IDs; existing Typora TOCs omit them.
    const matches = headings.filter(heading => text(heading) === text(link));
    if (matches.length === 1) link.setAttribute('href', '#' + matches[0].id);
  }
}

export async function render({ script } = {}) {
  const files = JSON.parse(execFileSync('python3', ['-c',
    'import json, sys; from index import course_files; print(json.dumps([str(p) for p in course_files(script=sys.argv[1] if len(sys.argv) > 1 else None)]))',
    ...(script === undefined ? [] : [script])],
  { cwd: directory, encoding: 'utf8' }));
  const assets = new Map(execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { cwd: root, encoding: 'utf8' })
    .split('\0').filter(Boolean).map(name => [name.normalize('NFC'), name]));
  const scratch = mkdtempSync(path.join(tmpdir(), 'course-pdf-'));
  const css = readFileSync(path.join(directory, 'pdf.css'), 'utf8');
  const template = path.join(scratch, 'template.html');
  writeFileSync(template, `<!doctype html><html lang="hr"><head><meta charset="utf-8">
    <meta http-equiv="Content-Security-Policy" content="script-src 'none'; object-src 'none'; frame-src 'none'; connect-src 'none'">
    <title>$pagetitle$</title><base href="$base$">
    <style>$highlighting-css$</style><style>${css}</style></head><body>$body$</body></html>`);
  const browser = await chromium.launch();
  try {
    let base, html;
    const context = await browser.newContext({ javaScriptEnabled: false });
    await context.route('**/*', async route => {
      const url = route.request().url();
      if (url === base && route.request().isNavigationRequest()) {
        return route.fulfill({ contentType: 'text/html', body: html });
      }
      const name = assetPath(url);
      if (name !== null) {
        const relative = assets.get(name);
        if (!relative || !extensions.has(path.extname(relative).toLowerCase()) ||
            lstatSync(path.join(root, relative)).isSymbolicLink()) return route.abort();
        return route.fulfill({ path: path.join(root, relative) });
      }
      if (url.startsWith('https://') && route.request().resourceType() === 'image') return route.continue();
      return route.abort();
    });
    const page = await context.newPage();
    // ponytail: CI rebuilds all lessons for shared assets; manual runs can select one lesson.
    for (let i = 0; i < files.length; i += 2) {
      const markdown = files[i];
      const pdf = files[i + 1];
      base = 'https://course.invalid/' + path.relative(root, path.dirname(markdown))
        .split(path.sep).map(encodeURIComponent).join('/') + '/';
      html = execFileSync('pandoc', [markdown, '--from=markdown+autolink_bare_uris+hard_line_breaks+gfm_auto_identifiers',
        '--to=html5', '--standalone', '--highlight-style=pygments', '--template', template,
        '--variable', `base=${base}`, '--metadata', `pagetitle=${path.basename(markdown, '.md')}`],
      { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 });
      await page.goto(base, { waitUntil: 'networkidle', timeout: 120000 });
      await page.evaluate(prepareDocument);
      await page.evaluate(async () => {
        await document.fonts.ready;
        await Promise.all([...document.images].map(image => image.decode().catch(() => {})));
      });
      const missing = await page.evaluate(() => [...document.images]
        .filter(image => !image.complete || !image.naturalWidth).map(image => image.src));
      if (missing.length) throw new Error(`Missing images in ${markdown}:\n${missing.join('\n')}`);
      if (!await page.evaluate(() => document.fonts.check('13px "Open Sans"'))) {
        throw new Error('Open Sans failed to load');
      }
      // Write to scratch first: a failed export must not replace an existing PDF.
      const data = await page.pdf({ format: 'A4', preferCSSPageSize: true, printBackground: true,
        tagged: true, outline: true });
      writeFileSync(path.join(scratch, path.basename(pdf)), data);
      console.log(`Generated ${path.relative(root, pdf)} (${data.length} bytes)`);
    }
    // Publish the complete set only after every lesson rendered successfully.
    for (let i = 1; i < files.length; i += 2) {
      writeFileSync(files[i], readFileSync(path.join(scratch, path.basename(files[i]))));
    }
  } finally {
    await browser.close();
    rmSync(scratch, { recursive: true, force: true });
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { script: { type: 'string' } } });
  await render(values);
}
