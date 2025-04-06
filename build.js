const fs = require('fs');
const path = require('path');

// Ensure out directory exists
if (!fs.existsSync('out')) {
  fs.mkdirSync('out');
}

// Create .nojekyll file
fs.writeFileSync(path.join('out', '.nojekyll'), '');

// Copy public directory to out
if (fs.existsSync('public')) {
  fs.cpSync('public', path.join('out', 'public'), { recursive: true });
} 