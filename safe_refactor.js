const fs = require('fs');

let css = fs.readFileSync('css/styles.css', 'utf8');

// 1. Remove all rules related to .theme-card--*
// The pattern looks for .theme-card-- followed by anything up to '{', then everything inside '{' and '}'
css = css.replace(/\.theme-card--[a-zA-Z0-9-_:\s\.]+\{[^}]+\}/g, '');

// 2. Remove the old base .theme-card and .theme-card:hover rules
css = css.replace(/\.theme-card \{\s*position: relative;\s*border-radius: 20px;\s*overflow: hidden;\s*cursor: pointer;\s*transition: transform var\(--transition-normal\), box-shadow var\(--transition-normal\);\s*animation: card-entrance 0\.6s var\(--ease-out\) both;\s*\}/g, '');
css = css.replace(/\.theme-card:hover \{\s*transform: translateY\(-6px\);\s*\}/g, '');

// 3. Remove .card-preview and .card-body that might conflict
css = css.replace(/\.card-preview \{\s*position: relative;\s*height: 200px;\s*padding: 24px;\s*display: flex;\s*flex-direction: column;\s*justify-content: flex-end;\s*overflow: hidden;\s*\}/g, '');
css = css.replace(/\.card-body \{\s*padding: 20px 24px 24px;\s*\}/g, '');

// 4. Inject our new premium styles right before the media queries at the bottom
const premiumCardCSS = `
/* ================================================================
   PREMIUM THEME CARD STYLES (DYNAMIC GLASSMORPHISM)
   ================================================================ */
.theme-card {
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: card-entrance 0.6s var(--ease-out) both;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 1;
}

/* Base Light Mode Adjustments */
html[data-mode="light"] .theme-card {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.theme-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: 24px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.theme-card:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 40px -10px var(--glow-color, rgba(0,0,0,0.5)), 0 0 20px -5px var(--glow-color, transparent);
  z-index: 10;
}

html[data-mode="light"] .theme-card:hover {
  border-color: rgba(0, 0, 0, 0.1);
}

.card-preview {
  position: relative;
  height: 220px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

html[data-mode="light"] .card-preview {
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

/* Dynamic Inner Decor (Injected via JS) */
.card-preview-inner {
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-preview-inner::after {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none;
}

/* Typography showcase inside preview */
.card-typo-showcase {
  font-size: 2.5rem;
  z-index: 2;
  letter-spacing: -1px;
}

.card-body {
  padding: 24px;
  position: relative;
  background: transparent;
}

.card-name {
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 8px;
  color: var(--site-text);
  font-family: var(--font-heading);
}

.card-desc {
  font-size: 0.9rem;
  color: var(--site-text-muted);
  line-height: 1.5;
  margin-bottom: 20px;
  font-family: var(--font-body);
}

.card-colors {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.card-color-dot {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  border: 2px solid rgba(255,255,255,0.1);
  transition: transform 0.3s ease;
}

html[data-mode="light"] .card-color-dot {
  border: 2px solid rgba(0,0,0,0.05);
}

.theme-card:hover .card-color-dot {
  transform: scale(1.1);
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card-tag {
  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(255,255,255,0.05);
  color: var(--site-text);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(4px);
}

html[data-mode="light"] .card-tag {
  background: rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.05);
}

/* ================================================================
   HERO SECTION PREMIUM OVERHAUL
   ================================================================ */
.premium-hero {
  position: relative;
  overflow: hidden;
  padding: 160px 0 100px;
}

.hero-bg-anim {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: -1;
  overflow: hidden;
  background: var(--site-background);
}

.bg-mesh {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  animation: mesh-float 20s infinite alternate cubic-bezier(0.4, 0, 0.2, 1);
}

html[data-mode="light"] .bg-mesh {
  opacity: 0.3;
}

.bg-mesh-1 {
  width: 600px; height: 600px;
  background: linear-gradient(135deg, #a855f7, #ec4899);
  top: -100px; left: -100px;
}

.bg-mesh-2 {
  width: 500px; height: 500px;
  background: linear-gradient(135deg, #3b82f6, #2dd4bf);
  bottom: -100px; right: -100px;
  animation-delay: -5s;
}

.bg-mesh-3 {
  width: 400px; height: 400px;
  background: linear-gradient(135deg, #f59e0b, #ef4444);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation-delay: -10s;
}

.bg-glass-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  backdrop-filter: blur(60px);
  -webkit-backdrop-filter: blur(60px);
  background: rgba(var(--site-background-rgb), 0.5);
}

@keyframes mesh-float {
  0% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(50px, -50px) scale(1.1); }
  66% { transform: translate(-50px, 50px) scale(0.9); }
  100% { transform: translate(0, 0) scale(1); }
}

`;

// Append it right before media queries or just at the end. At the end is fine since it overrides correctly.
css += '\n' + premiumCardCSS;

fs.writeFileSync('css/styles.css', css, 'utf8');
console.log('CSS Safe Refactor complete.');
