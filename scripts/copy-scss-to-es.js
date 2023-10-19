const glob = require('glob');
const path = require('path');
const fs = require('fs');

glob.sync('src/**/*.scss').forEach((file) => {
  const esPath = path.join(
    process.cwd(),
    file.replace('src', 'es').replace(/\/\w+\.scss/, '')
  );
  if (!fs.existsSync(esPath)) {
    fs.mkdirSync(esPath);
  }

  fs.copyFileSync(file, file.replace('src', 'es'));
});
