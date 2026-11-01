import fs from 'fs';
import path from 'path';

const filesToDelete = [
  path.resolve('dist/_redirects'),
  path.resolve('public/_redirects')
];

for (const file of filesToDelete) {
  try {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`[CLEAN] Removed stale file: ${file}`);
    }
  } catch (e) {
    // ignore
  }
}
