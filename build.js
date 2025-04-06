const fs = require('fs');
const path = require('path');

// Ensure out directory exists
if (!fs.existsSync('out')) {
  fs.mkdirSync('out');
}

// Create .nojekyll file
fs.writeFileSync(path.join('out', '.nojekyll'), '');

// Create CNAME file
fs.writeFileSync(path.join('out', 'CNAME'), 'bikesprojects.mcdonge.github.io');

// Copy public directory to out
if (fs.existsSync('public')) {
  const publicDir = path.join('out', 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.cpSync('public', publicDir, { recursive: true });
}

// Ensure index.html exists
const indexPath = path.join('out', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('Error: index.html not found in out directory');
  process.exit(1);
} 