const plugin = require('tailwindcss/plugin');
const { readFileSync } = require('fs');
const { resolve } = require('path');

module.exports = plugin(({ addBase, theme }) => {
  const icons = theme('icons') || [];
  icons.forEach(icon => {
    const iconPath = resolve(process.cwd(),`./node_modules/bootstrap-icons/icons/${icon}.svg`);
    const svg = readFileSync(iconPath, 'utf-8').replace(/\n/g, "");
    addBase({ [`[class*=icon--${icon}]`]: { 'mask-image': `url('data:image/svg+xml,${svg}')` }});
  });
});