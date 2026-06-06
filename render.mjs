// QA render: A5 portrait @300dpi (1748x2480px). HTML -> PNG.
// Usage: node flyers-arivela-rebrand/render.mjs <abs-or-rel.html> [out.png]
// Run from the output/ dir so it resolves output/node_modules/playwright.
import { chromium } from 'playwright';
import path from 'node:path';

const input = process.argv[2];
if (!input) { console.error('usage: node render.mjs <html> [out.png]'); process.exit(1); }
const abs = path.resolve(input);
const out = process.argv[3] ? path.resolve(process.argv[3]) : abs.replace(/\.html?$/i, '.png');

const W = 1748, H = 2480; // A5 portrait @ 300 DPI

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  const errors = [];
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto('file://' + abs, { waitUntil: 'networkidle', timeout: 30000 });
  try { await page.evaluate(() => document.fonts && document.fonts.ready); } catch {}
  await page.waitForTimeout(500);
  await page.screenshot({ path: out, clip: { x: 0, y: 0, width: W, height: H } });
  if (errors.length) console.log('CONSOLE_ERRORS:', errors.slice(0, 8).join(' | '));
  console.log('rendered', out);
} finally {
  await browser.close();
}
