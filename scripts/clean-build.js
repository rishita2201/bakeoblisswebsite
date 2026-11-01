import fs from 'fs';
import path from 'path';

function removeFile(targetPath) {
  try {
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
      console.log(`[CLEAN] Removed: ${targetPath}`);
    }
  } catch (err) {
    console.error(`[CLEAN] Error removing ${targetPath}:`, err.message);
  }
}

removeFile(path.resolve('dist/_redirects'));
removeFile(path.resolve('public/_redirects'));
removeFile(path.resolve('_redirects'));

const distDir = path.resolve('dist');
if (fs.existsSync(distDir)) {
  try {
    const entries = fs.readdirSync(distDir);
    for (const name of entries) {
      if (name === '_redirects') {
        removeFile(path.join(distDir, name));
      }
    }
  } catch (e) {
    // ignore
  }
}
