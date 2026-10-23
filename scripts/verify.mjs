import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
const root = new URL('../', import.meta.url);
const pages = ['index.html','services.html','about.html','rebrand.html','contact.html','404.html'];
let references = 0;
for (const page of pages) {
  const html = await readFile(new URL(page, root), 'utf8');
  assert.match(html, /<title>.+Expo Freight<\/title>/);
  assert.match(html, /id="main"/);
  assert.equal((html.match(/<h1[ >]/g)||[]).length, 1, page + ' needs one main heading');
  assert.match(html, /noindex,nofollow/, 'Client demo should not be indexed');
  assert.match(html, /expo-freight-logo\.png/, 'Original logo must be used');
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const target = match[1];
    if (/^(?:https?:|mailto:|tel:|data:)/.test(target)) continue;
    const [resource, hash] = target.split('#');
    const file = resource.split('?')[0].replace(/^\/EXPOFREIGHT\//, './');
    if (file) await access(new URL(file, root));
    if (hash) {
      const destination = file ? await readFile(new URL(file, root), 'utf8') : html;
      assert.ok(destination.includes('id="' + hash + '"'), page + ': missing anchor ' + target);
    }
    references++;
  }
}
const css = await readFile(new URL('styles.css', root), 'utf8');
for (const match of css.matchAll(/url\(['"]?(\.\/[^)'"]+)/g)) await access(new URL(match[1], root));
assert.match(css, /prefers-reduced-motion/);
const home = await readFile(new URL('index.html', root), 'utf8');
assert.doesNotMatch(home, /brand-(?:truck|van|showcase|uniform|stationery)\.webp/, 'Proposal mockups stay off the company homepage');
const vision = await readFile(new URL('rebrand.html', root), 'utf8');
assert.equal((vision.match(/data-gallery /g)||[]).length, 8);
assert.match(vision, /Proposed rebranding concept/);
const contact = await readFile(new URL('contact.html', root), 'utf8');
assert.match(contact, /not connected to an inbox/);
assert.match(contact, /type="submit" disabled/);
console.log('Passed: ' + pages.length + ' pages, ' + references + ' local links/assets, anchor targets, proposal separation, motion fallback and honest form workflow.');
