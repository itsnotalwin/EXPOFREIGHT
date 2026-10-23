import { mkdir, rm, copyFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = fileURLToPath(new URL('../', import.meta.url));
const target = path.join(root, 'dist');
export async function build() {
  await rm(target, { recursive: true, force: true });
  await mkdir(target, { recursive: true });
  const files = ['index.html', 'services.html', 'about.html', 'rebrand.html', 'contact.html', '404.html', 'styles.css', 'app.js', 'config.js', 'robots.txt', '.nojekyll'];
  for (const file of files) await copyFile(path.join(root, file), path.join(target, file));
  await cp(path.join(root, 'assets'), path.join(target, 'assets'), {
    recursive: true,
    filter: source => !source.endsWith('.md') && !source.endsWith('.b64')
  });
  console.log('Built five static pages plus a 404 page in dist/. All runtime assets are local.');
}
if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await build();
