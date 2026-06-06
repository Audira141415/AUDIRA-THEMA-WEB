const fs = require('fs');

let css = fs.readFileSync('css/styles.css', 'utf8');

// Remove old .theme-card
css = css.replace(/\.theme-card \{\n  position: relative;\n  border-radius: 20px;\n  overflow: hidden;\n  cursor: pointer;\n  transition: transform var\(--transition-normal\), box-shadow var\(--transition-normal\);\n  animation: card-entrance 0\.6s var\(--ease-out\) both;\n\}\n\n\.theme-card:hover \{\n  transform: translateY\(-6px\);\n\}/g, '');

// Update premium hover to use --glow-color
css = css.replace(/\.theme-card:hover \{\n  transform: translateY\(-10px\) scale\(1\.02\);\n  border-color: rgba\(255, 255, 255, 0\.1\);\n  z-index: 10;\n\}/g, `.theme-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px -10px var(--glow-color, rgba(0,0,0,0.5)), 0 0 20px -5px var(--glow-color, transparent);
  z-index: 10;
}`);

// Delete old .card-preview and .card-body that might conflict
css = css.replace(/\.card-preview \{\n  position: relative;\n  height: 200px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  overflow: hidden;\n\}/g, '');
css = css.replace(/\.card-body \{\n  padding: 20px 24px 24px;\n\}/g, '');

fs.writeFileSync('css/styles.css', css, 'utf8');
console.log('CSS Cleanup complete.');
