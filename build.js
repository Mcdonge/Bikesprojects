const fs = require('fs');
const path = require('path');

try {
  // Ensure out directory exists
  if (!fs.existsSync('out')) {
    fs.mkdirSync('out', { recursive: true });
  }

  // Create .nojekyll file
  fs.writeFileSync(path.join('out', '.nojekyll'), '');

  // Create CNAME file (only for production)
  if (process.env.NODE_ENV === 'production') {
    fs.writeFileSync(path.join('out', 'CNAME'), 'bikesprojects.mcdonge.github.io');
  }

  // Copy public directory to out
  if (fs.existsSync('public')) {
    const publicDir = path.join('out', 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    fs.cpSync('public', publicDir, { recursive: true, force: true });
  }

  // Verify build output
  const requiredFiles = ['index.html', '_next'];
  for (const file of requiredFiles) {
    const filePath = path.join('out', file);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Required file ${file} not found in out directory`);
    }
  }

  console.log('Build verification completed successfully');
} catch (error) {
  console.error('Error during build verification:', error);
  process.exit(1);
} 