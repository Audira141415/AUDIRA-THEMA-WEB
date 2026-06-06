// ─── THEME PAGE LOGIC ───

const dom = {
  get themePageContainer() { return document.getElementById('theme-page-container'); },
  get modalBadge() { return document.getElementById('modal-badge'); },
  get modalTitle() { return document.getElementById('modal-title'); },
  get modalDescription() { return document.getElementById('modal-description'); },
  get paletteGrid() { return document.getElementById('palette-grid'); },
  get typographyPreview() { return document.getElementById('typography-preview'); },
  get componentsPreview() { return document.getElementById('components-preview'); },
  get propertiesGrid() { return document.getElementById('properties-grid'); },
  
  // Customizer
  get editPrimary() { return document.getElementById('edit-color-primary'); },
  get editSecondary() { return document.getElementById('edit-color-secondary'); },
  get editAccent() { return document.getElementById('edit-color-accent'); },
  get editBackground() { return document.getElementById('edit-color-background'); },
  get editSurface() { return document.getElementById('edit-color-surface'); },
  get editText() { return document.getElementById('edit-color-text'); },
  get editRadius() { return document.getElementById('edit-border-radius'); },
  get editWidth() { return document.getElementById('edit-border-width'); },

  // Code Export
  get cssCodeOutput() { return document.getElementById('css-code-output'); },
  get tailwindCodeOutput() { return document.getElementById('tailwind-code-output'); },
  get reactCodeOutput() { return document.getElementById('react-code-output'); },
  get htmlCodeOutput() { return document.getElementById('html-code-output'); },
  get figmaCodeOutput() { return document.getElementById('figma-code-output'); },
  get scssCodeOutput() { return document.getElementById('scss-code-output'); },
  get blockCss() { return document.getElementById('block-css'); },
  get blockTailwind() { return document.getElementById('block-tailwind'); },
  get blockReact() { return document.getElementById('block-react'); },
  get blockHtml() { return document.getElementById('block-html'); },
  get blockFigma() { return document.getElementById('block-figma'); },
  get blockScss() { return document.getElementById('block-scss'); },
  get blockBookmarklet() { return document.getElementById('block-bookmarklet'); },
  get codeTabs() { return document.querySelectorAll('.code-tab'); },
  get copyCodeBtn() { return document.getElementById('copy-code-btn'); },
  get btnDownloadZip() { return document.getElementById('btn-download-zip'); },
  get btnShareLink() { return document.getElementById('btn-share-link'); },
  get bookmarkletLink() { return document.getElementById('bookmarklet-link'); },

  // Misc
  get btnFavorite() { return document.getElementById('btn-favorite'); },
  get btnInvertTheme() { return document.getElementById('btn-invert-theme'); },
  get btnSandbox() { return document.getElementById('btn-sandbox'); },
  get typoInput() { return document.getElementById('typo-playground-input'); },
  get modeToggle() { return document.getElementById('mode-toggle'); },
  get toast() { return document.getElementById('toast'); },
  get toastText() { return document.getElementById('toast-text'); },
  
  // Customizer Extension Inputs
  get crossbreedSelect() { return document.getElementById('crossbreed-select'); },
  get fontHeadingSelect() { return document.getElementById('font-picker-heading'); },
  get fontBodySelect() { return document.getElementById('font-picker-body'); },
  get btnAutofixContrast() { return document.getElementById('btn-autofix-contrast'); },
  get toggleSfx() { return document.getElementById('toggle-sfx'); },
  get templateSelect() { return document.getElementById('template-select'); },
  get dashboardMockup() { return document.getElementById('dashboard-mockup'); },

  // a11y
  get contrastRatio() { return document.getElementById('contrast-ratio'); },
  get contrastBadge() { return document.getElementById('contrast-badge'); }
};

let activeTheme = null;
let customTypoText = '';

function init() {
  const params = new URLSearchParams(window.location.search);
  const themeId = params.get('id');
  const magicParam = params.get('magic');

  if (magicParam) {
    const parts = magicParam.split('-');
    if (parts.length === 3) {
      const h = parseInt(parts[0]);
      const s = parseInt(parts[1]);
      const mode = parts[2];
      activeTheme = generateMagicTheme(h, s, mode);
    }
  } else if (themeId) {
    activeTheme = themes.find(t => t.id === themeId);
  }

  if (!activeTheme) {
    window.location.href = 'index.html';
    return;
  }
  
  // Create a deep copy so we can edit it live
  activeTheme = JSON.parse(JSON.stringify(activeTheme));
  
  // Populate crossbreed dropdown
  if (dom.crossbreedSelect) {
    dom.crossbreedSelect.innerHTML = '<option value="">-- Choose Theme --</option>';
    themes.forEach(t => {
      if (t.id !== activeTheme.id) {
        const opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        dom.crossbreedSelect.appendChild(opt);
      }
    });
  }

  document.title = activeTheme.name + ' — AUDIRA THEMA';
  renderThemeDetails(activeTheme);
  checkFavorite(activeTheme.id);
  bindEvents();
  loadMode();
}

function renderThemeDetails(theme) {
  // Apply CSS variables
  updateContainerStyles(theme);

  // Header
  dom.modalBadge.textContent = theme.categories.map(c => c.toUpperCase()).join(' · ');
  dom.modalBadge.style.background = theme.colors.primary + '20';
  dom.modalBadge.style.color = theme.colors.primary;
  dom.modalTitle.textContent = theme.name;
  dom.modalDescription.textContent = theme.description;

  // Init Customizer Inputs
  initCustomizerValues(theme);

  renderPalette(theme);
  renderTypography(theme);
  renderComponents(theme);
  bindPlaygroundEvents();
  renderProperties(theme);
  updateCodeBlocks(theme);
}

function updateContainerStyles(theme) {
  const container = dom.themePageContainer;
  container.style.setProperty('--preview-primary', theme.colors.primary);
  container.style.setProperty('--preview-secondary', theme.colors.secondary);
  container.style.setProperty('--preview-accent', theme.colors.accent);
  container.style.setProperty('--preview-background', theme.colors.background);
  container.style.setProperty('--preview-surface', theme.colors.surface);
  container.style.setProperty('--preview-text', theme.colors.text);
  container.style.setProperty('--preview-heading-font', theme.typography.headingFont);
  container.style.setProperty('--preview-body-font', theme.typography.bodyFont);
  container.style.setProperty('--preview-radius', theme.properties.borderRadius);
  container.style.setProperty('--preview-border-width', theme.properties.borderWidth);
  container.style.setProperty('--preview-border-color', theme.properties.borderColor);
  container.style.setProperty('--preview-btn-text', theme.btnText || '#fff');

  const shadow = `${theme.properties.shadowOffset} ${theme.properties.shadowColor}`;
  dom.themePageContainer.style.setProperty('--preview-shadow', shadow);
  
  // Hue rotate for Smart Image
  if (theme.colors && theme.colors.primary) {
    const hsl = hexToHSL(theme.colors.primary);
    dom.themePageContainer.style.setProperty('--preview-hue-rotate', `${hsl.h}deg`);
  }

  // Calculate Contrast
  updateContrastScore(theme);
}

function updateContrastScore(theme) {
  if(!dom.contrastRatio || !dom.contrastBadge) return;
  const bg = theme.colors.background;
  const text = theme.colors.text;
  
  const ratio = getContrastRatio(bg, text);
  dom.contrastRatio.textContent = ratio.toFixed(2) + ':1';
  
  dom.contrastBadge.className = 'preview-badge';
  if(ratio >= 7) {
    dom.contrastBadge.textContent = 'Pass AAA';
    dom.contrastBadge.style.background = 'rgba(74, 222, 128, 0.2)';
    dom.contrastBadge.style.color = '#22c55e';
    dom.contrastBadge.style.borderColor = '#22c55e';
  } else if(ratio >= 4.5) {
    dom.contrastBadge.textContent = 'Pass AA';
    dom.contrastBadge.style.background = 'rgba(250, 204, 21, 0.2)';
    dom.contrastBadge.style.color = '#eab308';
    dom.contrastBadge.style.borderColor = '#eab308';
  } else {
    dom.contrastBadge.textContent = 'Fail';
    dom.contrastBadge.style.background = 'rgba(239, 68, 68, 0.2)';
    dom.contrastBadge.style.color = '#ef4444';
    dom.contrastBadge.style.borderColor = '#ef4444';
  }
}

function initCustomizerValues(theme) {
  if(!dom.editPrimary) return;

  dom.editPrimary.value = theme.colors.primary;
  document.getElementById('hex-color-primary').textContent = theme.colors.primary;

  dom.editSecondary.value = theme.colors.secondary;
  document.getElementById('hex-color-secondary').textContent = theme.colors.secondary;

  dom.editAccent.value = theme.colors.accent;
  document.getElementById('hex-color-accent').textContent = theme.colors.accent;

  dom.editBackground.value = theme.colors.background;
  document.getElementById('hex-color-background').textContent = theme.colors.background;

  dom.editSurface.value = theme.colors.surface;
  document.getElementById('hex-color-surface').textContent = theme.colors.surface;

  dom.editText.value = theme.colors.text;
  document.getElementById('hex-color-text').textContent = theme.colors.text;

  const rVal = parseInt(theme.properties.borderRadius) || 0;
  dom.editRadius.value = rVal;
  document.getElementById('val-border-radius').textContent = `${rVal}px`;

  const wVal = parseInt(theme.properties.borderWidth) || 0;
  dom.editWidth.value = wVal;
  document.getElementById('val-border-width').textContent = `${wVal}px`;
}

function renderPalette(theme) {
  dom.paletteGrid.innerHTML = '';
  Object.entries(theme.colors).forEach(([name, hex]) => {
    const swatch = document.createElement('div');
    swatch.className = 'palette-swatch';
    swatch.innerHTML = `
      <div class="palette-color" style="background:${hex}"></div>
      <div class="palette-info">
        <div class="palette-name">${name}</div>
        <div class="palette-hex">${hex}</div>
      </div>
    `;
    swatch.addEventListener('click', () => copyToClipboard(hex, `Copied ${hex}`));
    dom.paletteGrid.appendChild(swatch);
  });
}

function renderTypography(theme) {
  const displayTexts = {
    h1: customTypoText || 'The quick brown fox',
    h2: customTypoText || 'Jumps over the lazy dog',
    h3: customTypoText || 'Pack my box with dozen',
    body: customTypoText || 'The five boxing wizards jump quickly. How vexingly quick daft zebras jump!'
  };

  const sizes = [
    { label: 'H1', text: displayTexts.h1, size: '2.5rem', font: theme.typography.headingFont, weight: theme.typography.headingWeight },
    { label: 'H2', text: displayTexts.h2, size: '1.8rem', font: theme.typography.headingFont, weight: theme.typography.headingWeight },
    { label: 'H3', text: displayTexts.h3, size: '1.3rem', font: theme.typography.headingFont, weight: theme.typography.headingWeight },
    { label: 'Body', text: displayTexts.body, size: '1rem', font: theme.typography.bodyFont, weight: theme.typography.bodyWeight }
  ];

  dom.typographyPreview.innerHTML = sizes.map(s => `
    <div class="typo-row">
      <span class="typo-label">${s.label}</span>
      <span class="typo-sample" style="font-family:${s.font}; font-size:${s.size}; font-weight:${s.weight}; color:var(--site-text);">
        ${s.text}
      </span>
      <span class="typo-meta">${s.size} / ${s.weight}</span>
    </div>
  `).join('');
}

function renderComponents(theme) {
  dom.componentsPreview.innerHTML = `
    <!-- Image Preview with Smart Filter -->
    <div class="preview-group">
      <div class="preview-group-label">Smart Image (Auto Hue-Rotated)</div>
      <div class="preview-image-wrapper">
        <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" class="preview-image" alt="Sample Abstract Image">
      </div>
    </div>

    <div class="preview-group">
      <div class="preview-group-label">Buttons</div>
      <div class="preview-buttons">
        <div class="preview-btn preview-btn--primary" id="btn-preview-primary">Primary</div>
        <div class="preview-btn preview-btn--secondary" id="btn-preview-secondary">Secondary</div>
        <div class="preview-btn preview-btn--outline" id="btn-preview-outline">Outline</div>
      </div>
    </div>
    
    <div class="preview-group" style="display:flex; gap: 20px; flex-wrap: wrap;">
      <div style="flex:1; min-width: 200px;">
        <div class="preview-group-label">Form Input</div>
        <input type="text" class="preview-input" placeholder="Enter your email...">
      </div>
      <div style="flex:1; min-width: 200px;">
        <div class="preview-group-label">Toggle & Badges</div>
        <div style="display:flex; align-items:center; gap: 16px;">
          <label class="preview-toggle">
            <input type="checkbox" id="preview-toggle-input" checked>
            <span class="preview-slider"></span>
          </label>
          <span class="preview-badge" id="preview-status-badge">Active</span>
          <span class="preview-badge accent">New</span>
        </div>
      </div>
    </div>

    <div class="preview-group">
      <div class="preview-group-label" style="display:flex; justify-content:space-between; align-items:center;">
        <span>Progress Bar</span>
        <input type="range" id="progress-slider" min="0" max="100" value="70" style="width: 80px; accent-color: var(--preview-primary); cursor: pointer;">
      </div>
      <div class="preview-progress-container">
        <div class="preview-progress-bar" id="preview-progress-bar" style="width: 70%;"></div>
      </div>
    </div>

    <div class="preview-group">
      <div class="preview-group-label">Card</div>
      <div class="preview-card-demo">
        <div class="preview-card-img"></div>
        <div class="preview-card-content">
          <div class="preview-card-title">Card Title</div>
          <div class="preview-card-text">This is a sample card component styled with the ${theme.name} theme design system.</div>
        </div>
      </div>
    </div>

    <div class="preview-group">
      <div class="preview-group-label">Badges</div>
      <div class="preview-badges">
        <span class="preview-badge preview-badge--primary">Primary</span>
        <span class="preview-badge preview-badge--secondary">Secondary</span>
        <span class="preview-badge preview-badge--accent">Accent</span>
      </div>
    </div>
  `;
}

function bindPlaygroundEvents() {
  const slider = document.getElementById('progress-slider');
  const bar = document.getElementById('preview-progress-bar');
  if (slider && bar) {
    slider.addEventListener('input', (e) => {
      bar.style.width = e.target.value + '%';
    });
  }

  const toggle = document.getElementById('preview-toggle-input');
  const badge = document.getElementById('preview-status-badge');
  if (toggle && badge) {
    toggle.addEventListener('change', (e) => {
      if (e.target.checked) {
        badge.textContent = 'Active';
        badge.style.opacity = '1';
        badge.style.background = 'color-mix(in srgb, var(--preview-secondary) 15%, transparent)';
        badge.style.color = 'var(--preview-secondary)';
      } else {
        badge.textContent = 'Inactive';
        badge.style.opacity = '0.5';
        badge.style.background = 'rgba(255,255,255,0.05)';
        badge.style.color = 'var(--site-text-muted)';
      }
    });
  }

  const btnPrimary = document.getElementById('btn-preview-primary');
  const btnSecondary = document.getElementById('btn-preview-secondary');
  const btnOutline = document.getElementById('btn-preview-outline');

  const handleBtnClick = (name) => {
    showToast(`${name} Button Clicked! 🚀`);
  };

  if (btnPrimary) btnPrimary.addEventListener('click', () => handleBtnClick('Primary'));
  if (btnSecondary) btnSecondary.addEventListener('click', () => handleBtnClick('Secondary'));
  if (btnOutline) btnOutline.addEventListener('click', () => handleBtnClick('Outline'));
}

function renderProperties(theme) {
  const props = [
    { label: 'Border Radius', value: theme.properties.borderRadius },
    { label: 'Border Width', value: theme.properties.borderWidth },
    { label: 'Shadow', value: `${theme.properties.shadowOffset} ${theme.properties.shadowColor}` },
    { label: 'Border Color', value: theme.properties.borderColor },
    { label: 'Heading Font', value: theme.typography.headingFont.replace(/'/g, '') },
    { label: 'Body Font', value: theme.typography.bodyFont.replace(/'/g, '') }
  ];

  dom.propertiesGrid.innerHTML = props.map(p => `
    <div class="property-item">
      <div class="property-label">${p.label}</div>
      <div class="property-value">${p.value}</div>
    </div>
  `).join('');
}

function updateCodeBlocks(theme) {
  const cssCode = `:root {
  --primary: ${theme.colors.primary};
  --secondary: ${theme.colors.secondary};
  --accent: ${theme.colors.accent};
  --background: ${theme.colors.background};
  --surface: ${theme.colors.surface};
  --text: ${theme.colors.text};

  --radius: ${theme.properties.borderRadius};
  --border-width: ${theme.properties.borderWidth};
  --border-color: ${theme.properties.borderColor || '#e2e8f0'};
  --shadow: ${theme.properties.shadowOffset} ${theme.properties.shadowColor};

  --font-heading: ${theme.typography.headingFont};
  --font-body: ${theme.typography.bodyFont};
}`;

  const tailwindObj = {
    theme: {
      extend: {
        colors: theme.colors,
        fontFamily: {
          sans: [theme.typography.bodyFont],
          heading: [theme.typography.headingFont]
        },
        borderRadius: {
          'theme': theme.properties.borderRadius
        },
        boxShadow: {
          'theme': theme.properties.shadowOffset + ' ' + theme.properties.shadowColor
        }
      }
    }
  };

  // React JSX
  const reactCode = `import React from 'react';

// Make sure your tailwind.config.js is updated with the theme colors!

export const Button = ({ children, variant = 'primary', ...props }) => {
  const base = "px-6 py-3 rounded-theme font-semibold transition-all duration-300 shadow-theme hover:-translate-y-1";
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  return (
    <button className={\`\${base} \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
};

export const Card = ({ title, children }) => (
  <div className="bg-surface rounded-theme border border-border shadow-theme p-6">
    <h3 className="font-heading text-xl text-text font-bold mb-3">{title}</h3>
    <div className="text-text opacity-80 font-sans">{children}</div>
  </div>
);

export const Input = (props) => (
  <input 
    className="w-full px-4 py-3 bg-surface border-borderWidth border-border rounded-theme text-text font-sans focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all shadow-inner"
    {...props}
  />
);`;

  // HTML Template
  const htmlTemplateCode = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${theme.name} Landing Page</title>
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&family=Nunito:wght@400;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&family=Righteous&family=Lora:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800;900&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Tailwind via CDN for quick testing (Make sure to configure tailwind config locally!) -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '${theme.colors.primary}',
            secondary: '${theme.colors.secondary}',
            accent: '${theme.colors.accent}',
            background: '${theme.colors.background}',
            surface: '${theme.colors.surface}',
            text: '${theme.colors.text}',
            border: '${theme.properties.borderColor}',
          },
          fontFamily: {
            heading: [${theme.typography.headingFont}],
            sans: [${theme.typography.bodyFont}],
          },
          borderRadius: {
            theme: '${theme.properties.borderRadius}',
          },
          borderWidth: {
            theme: '${theme.properties.borderWidth}',
          },
          boxShadow: {
            theme: '${theme.properties.shadowOffset} ${theme.properties.shadowColor}',
          }
        }
      }
    }
  </script>
  <style>
    body { background-color: ${theme.colors.background}; color: ${theme.colors.text}; }
  </style>
</head>
<body class="antialiased min-h-screen font-sans selection:bg-primary selection:text-white">
  
  <!-- Navbar -->
  <nav class="border-b border-border bg-surface/80 backdrop-blur-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-primary font-heading font-bold text-2xl tracking-tight">Brand.</div>
      <div class="hidden md:flex gap-8 font-medium opacity-80">
        <a href="#" class="hover:text-primary transition-colors">Features</a>
        <a href="#" class="hover:text-primary transition-colors">Pricing</a>
        <a href="#" class="hover:text-primary transition-colors">About</a>
      </div>
      <div>
        <button class="bg-primary text-white px-6 py-2.5 rounded-theme font-semibold shadow-theme hover:-translate-y-0.5 transition-transform">
          Get Started
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
    <div>
      <div class="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 border border-secondary/20">
        v2.0 is now live 🚀
      </div>
      <h1 class="text-5xl md:text-6xl font-heading font-extrabold leading-tight mb-6">
        Build faster with <span class="text-primary">beautiful</span> design.
      </h1>
      <p class="text-lg opacity-70 mb-10 leading-relaxed max-w-lg">
        Empower your team to ship products that users love. Our platform provides everything you need to scale your ideas into reality.
      </p>
      <div class="flex flex-wrap gap-4">
        <button class="bg-primary text-white px-8 py-4 rounded-theme font-semibold shadow-theme hover:-translate-y-1 transition-all">
          Start for free
        </button>
        <button class="bg-surface border-borderWidth border-border px-8 py-4 rounded-theme font-semibold hover:bg-secondary/5 transition-colors">
          View Documentation
        </button>
      </div>
    </div>
    
    <div class="relative">
      <!-- Decorative blob -->
      <div class="absolute -inset-4 bg-gradient-to-tr from-primary to-accent opacity-30 blur-3xl rounded-full"></div>
      
      <!-- Feature Image/Card -->
      <div class="relative bg-surface rounded-theme border border-border shadow-theme p-8 overflow-hidden">
        <div class="flex items-center gap-3 mb-8 pb-6 border-b border-border">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl">✦</div>
          <div>
            <div class="font-bold">System Status</div>
            <div class="text-sm opacity-60">All systems operational</div>
          </div>
        </div>
        
        <div class="space-y-4">
          <div class="h-4 bg-background rounded-full w-full overflow-hidden">
            <div class="h-full bg-primary w-3/4 rounded-full"></div>
          </div>
          <div class="h-4 bg-background rounded-full w-full overflow-hidden">
            <div class="h-full bg-secondary w-1/2 rounded-full"></div>
          </div>
          <div class="h-4 bg-background rounded-full w-full overflow-hidden">
            <div class="h-full bg-accent w-5/6 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

</body>
</html>`;

  // Figma design tokens format
  const figmaTokensObj = {
    "colors": {
      "primary": { "value": theme.colors.primary, "type": "color" },
      "secondary": { "value": theme.colors.secondary, "type": "color" },
      "accent": { "value": theme.colors.accent, "type": "color" },
      "background": { "value": theme.colors.background, "type": "color" },
      "surface": { "value": theme.colors.surface, "type": "color" },
      "text": { "value": theme.colors.text, "type": "color" }
    },
    "typography": {
      "headingFont": { "value": theme.typography.headingFont, "type": "fontFamily" },
      "bodyFont": { "value": theme.typography.bodyFont, "type": "fontFamily" }
    },
    "properties": {
      "borderRadius": { "value": theme.properties.borderRadius, "type": "dimension" },
      "borderWidth": { "value": theme.properties.borderWidth, "type": "dimension" },
      "borderColor": { "value": theme.properties.borderColor || 'rgba(0,0,0,0.1)', "type": "color" }
    }
  };

  // SCSS Format
  const scssCode = `$theme-primary: ${theme.colors.primary};
$theme-secondary: ${theme.colors.secondary};
$theme-accent: ${theme.colors.accent};
$theme-background: ${theme.colors.background};
$theme-surface: ${theme.colors.surface};
$theme-text: ${theme.colors.text};

$theme-radius: ${theme.properties.borderRadius};
$theme-border-width: ${theme.properties.borderWidth};
$theme-border-color: ${theme.properties.borderColor || 'rgba(0,0,0,0.1)'};
$theme-font-heading: ${theme.typography.headingFont};
$theme-font-body: ${theme.typography.bodyFont};`;

  // Populate code blocks
  if(dom.cssCodeOutput) dom.cssCodeOutput.textContent = cssCode;
  if(dom.tailwindCodeOutput) dom.tailwindCodeOutput.textContent = 'module.exports = ' + JSON.stringify(tailwindObj, null, 2) + ';';
  if(dom.reactCodeOutput) dom.reactCodeOutput.textContent = reactCode;
  if(dom.htmlCodeOutput) dom.htmlCodeOutput.textContent = htmlTemplateCode;
  if(dom.figmaCodeOutput) dom.figmaCodeOutput.textContent = JSON.stringify(figmaTokensObj, null, 2);
  if(dom.scssCodeOutput) dom.scssCodeOutput.textContent = scssCode;

  // Bookmarklet
  const bookmarkletCode = `javascript:(function(){
    const root = document.documentElement;
    root.style.setProperty('--primary', '${theme.colors.primary}');
    root.style.setProperty('--secondary', '${theme.colors.secondary}');
    root.style.setProperty('--accent', '${theme.colors.accent}');
    root.style.setProperty('--background', '${theme.colors.background}');
    root.style.setProperty('--surface', '${theme.colors.surface}');
    root.style.setProperty('--text', '${theme.colors.text}');
    root.style.setProperty('--border-radius', '${theme.properties.borderRadius}');
    root.style.setProperty('--border-width', '${theme.properties.borderWidth}');
    
    document.body.style.backgroundColor = '${theme.colors.background}';
    document.body.style.color = '${theme.colors.text}';
    document.body.style.fontFamily = '${theme.typography.bodyFont}';
    alert('AUDIRA THEMA Injected! 🎨');
  })();`.replace(/\s+/g, ' '); // minify

  if(dom.bookmarkletLink) {
    dom.bookmarkletLink.setAttribute('href', bookmarkletCode);
  }

  if(dom.cssCodeOutput) dom.cssCodeOutput.textContent = cssCode;
}

// ─── FAVORITES SYSTEM ───
function getFavorites() {
  const saved = localStorage.getItem('audira-favorites');
  return saved ? JSON.parse(saved) : [];
}

function checkFavorite(id) {
  if (!dom.btnFavorite) return;
  const favs = getFavorites();
  if (favs.includes(id)) {
    dom.btnFavorite.classList.add('is-saved');
    dom.btnFavorite.querySelector('.favorite-text').textContent = 'Saved';
  } else {
    dom.btnFavorite.classList.remove('is-saved');
    dom.btnFavorite.querySelector('.favorite-text').textContent = 'Save Theme';
  }
}

function toggleFavorite() {
  if (!activeTheme) return;
  const id = activeTheme.id;
  let favs = getFavorites();
  
  if (favs.includes(id)) {
    favs = favs.filter(f => f !== id);
    showToast('Removed from Favorites');
  } else {
    favs.push(id);
    showToast('Saved to Favorites ❤️');
  }
  
  localStorage.setItem('audira-favorites', JSON.stringify(favs));
  checkFavorite(id);
}

// ─── UTILS & EVENTS ───
// HEX to HSL & Invert Logic
function hexToRGB(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length == 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length == 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  return { r: +r, g: +g, b: +b };
}

function getLuminance(r, g, b) {
  let a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(hex1, hex2) {
  const rgb1 = hexToRGB(hex1);
  const rgb2 = hexToRGB(hex2);
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

function hexToHSL(H) {
  let r = 0, g = 0, b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  r /= 255; g /= 255; b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0, s = 0, l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}

function HSLToHex(h, s, l) {
  s /= 100; l /= 100;
  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2, r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }
  
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
}

function invertThemeColor() {
  if (!activeTheme) return;
  const keys = ['primary', 'secondary', 'accent', 'background', 'surface', 'text'];
  
  keys.forEach(key => {
    let hex = activeTheme.colors[key];
    let hsl = hexToHSL(hex);
    // Invert lightness proportionally
    hsl.l = 100 - hsl.l;
    
    // Safety check to prevent pure gray muddiness on inversion
    if(hsl.l > 40 && hsl.l < 60) {
        hsl.l = hsl.l > 50 ? 20 : 80;
    }

    activeTheme.colors[key] = HSLToHex(hsl.h, hsl.s, hsl.l);
  });

  // Re-render
  initCustomizerValues(activeTheme);
  updateContainerStyles(activeTheme);
  updateCodeBlocks(activeTheme);
  renderPalette(activeTheme);
  showToast('Theme Inverted! 🌗');
}

async function downloadZipKit() {
  if (!activeTheme || typeof JSZip === 'undefined') {
    showToast('Failed to load JSZip');
    return;
  }
  
  showToast('Packaging ZIP...');
  const zip = new JSZip();

  // HTML
  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${activeTheme.name} - AUDIRA THEMA Export</title>
  <link rel="stylesheet" href="style.css">
</head>
<body style="background: var(--color-background); color: var(--color-text); font-family: var(--font-body); padding: 40px;">
  <h1 style="font-family: var(--font-heading);">Welcome to ${activeTheme.name}</h1>
  <p>This is a starter template using your exported theme.</p>
  <button style="background: var(--color-primary); color: white; border: none; padding: 12px 24px; border-radius: var(--border-radius); box-shadow: var(--shadow); cursor: pointer; margin-top: 20px;">Primary Button</button>
</body>
</html>`;

  zip.file("index.html", htmlContent);
  zip.file("style.css", dom.cssCodeOutput.textContent);
  zip.file("tailwind.config.js", dom.tailwindCodeOutput.textContent);

  // Generate ZIP
  zip.generateAsync({type:"blob"}).then(function(content) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(content);
    link.download = `${activeTheme.name.toLowerCase().replace(/ /g, '-')}-audira-theme.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Download Started! 📦');
  });
}

let toastTimeout;
function showToast(message) {
  dom.toastText.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    dom.toast.classList.remove('show');
  }, 2200);
}

function copyToClipboard(text, message = 'Copied!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = text;
    el.style.position = 'fixed';
    el.style.opacity = '0';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast(message);
  });
}

function toggleMode() {
  const html = document.documentElement;
  const current = html.getAttribute('data-mode');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-mode', next);
  localStorage.setItem('audira-mode', next);
}

function loadMode() {
  const saved = localStorage.getItem('audira-mode');
  if (saved) {
    document.documentElement.setAttribute('data-mode', saved);
  }
}

function handleCustomizerInput(e) {
  if (!activeTheme) return;
  const id = e.target.id;
  const val = e.target.value;

  // Colors
  if (id === 'edit-color-primary') { activeTheme.colors.primary = val; document.getElementById('hex-color-primary').textContent = val; }
  if (id === 'edit-color-secondary') { activeTheme.colors.secondary = val; document.getElementById('hex-color-secondary').textContent = val; }
  if (id === 'edit-color-accent') { activeTheme.colors.accent = val; document.getElementById('hex-color-accent').textContent = val; }
  if (id === 'edit-color-background') { activeTheme.colors.background = val; document.getElementById('hex-color-background').textContent = val; }
  if (id === 'edit-color-surface') { activeTheme.colors.surface = val; document.getElementById('hex-color-surface').textContent = val; }
  if (id === 'edit-color-text') { activeTheme.colors.text = val; document.getElementById('hex-color-text').textContent = val; }

  // Properties
  if (id === 'edit-border-radius') { activeTheme.properties.borderRadius = val + 'px'; document.getElementById('val-border-radius').textContent = val + 'px'; }
  if (id === 'edit-border-width') { activeTheme.properties.borderWidth = val + 'px'; document.getElementById('val-border-width').textContent = val + 'px'; }

  updateContainerStyles(activeTheme);
  updateCodeBlocks(activeTheme);
  renderProperties(activeTheme);
}

function bindEvents() {
  // Live Customizer Sidebar Panel Toggle
  const btnCustomize = document.getElementById('btn-customize');
  const customizerPanel = document.getElementById('customizer-panel');
  const btnCloseCustomizer = document.getElementById('btn-customizer-close');

  if (btnCustomize && customizerPanel) {
    btnCustomize.addEventListener('click', () => {
      // Populate pickers with activeTheme colors
      document.getElementById('picker-primary').value = activeTheme.colors.primary;
      document.getElementById('hex-primary').value = activeTheme.colors.primary;

      document.getElementById('picker-secondary').value = activeTheme.colors.secondary;
      document.getElementById('hex-secondary').value = activeTheme.colors.secondary;

      document.getElementById('picker-accent').value = activeTheme.colors.accent;
      document.getElementById('hex-accent').value = activeTheme.colors.accent;

      document.getElementById('picker-background').value = activeTheme.colors.background;
      document.getElementById('hex-background').value = activeTheme.colors.background;

      document.getElementById('picker-surface').value = activeTheme.colors.surface;
      document.getElementById('hex-surface').value = activeTheme.colors.surface;

      document.getElementById('picker-text').value = activeTheme.colors.text;
      document.getElementById('hex-text').value = activeTheme.colors.text;

      customizerPanel.classList.add('active');
    });
  }

  if (btnCloseCustomizer && customizerPanel) {
    btnCloseCustomizer.addEventListener('click', () => {
      customizerPanel.classList.remove('active');
    });
  }

  // Handle color pickers in the sidebar
  const pickers = [
    { id: 'picker-primary', key: 'primary', hexId: 'hex-primary', inlinePickerId: 'edit-color-primary' },
    { id: 'picker-secondary', key: 'secondary', hexId: 'hex-secondary', inlinePickerId: 'edit-color-secondary' },
    { id: 'picker-accent', key: 'accent', hexId: 'hex-accent', inlinePickerId: 'edit-color-accent' },
    { id: 'picker-background', key: 'background', hexId: 'hex-background', inlinePickerId: 'edit-color-background' },
    { id: 'picker-surface', key: 'surface', hexId: 'hex-surface', inlinePickerId: 'edit-color-surface' },
    { id: 'picker-text', key: 'text', hexId: 'hex-text', inlinePickerId: 'edit-color-text' }
  ];

  pickers.forEach(picker => {
    const el = document.getElementById(picker.id);
    const hexEl = document.getElementById(picker.hexId);
    if (el) {
      el.addEventListener('input', (e) => {
        const color = e.target.value;
        hexEl.value = color;
        activeTheme.colors[picker.key] = color;
        
        // Also update the inline picker in the main customizer grid!
        const inlinePicker = document.getElementById(picker.inlinePickerId);
        if (inlinePicker) {
          inlinePicker.value = color;
          const inlineHex = document.getElementById('hex-color-' + picker.key);
          if (inlineHex) inlineHex.textContent = color;
        }

        updateContainerStyles(activeTheme);
        updateCodeBlocks(activeTheme);
        renderPalette(activeTheme);
      });
    }
  });

  // Reset Colors in sidebar
  const btnReset = document.getElementById('btn-reset-customizer');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      // Find original theme from the main database
      const original = themes.find(t => t.id === activeTheme.id) || themes[0];
      activeTheme = JSON.parse(JSON.stringify(original));
      renderThemeDetails(activeTheme);
      showToast('Colors Reset! 🎨');
      
      // Close sidebar
      if (customizerPanel) customizerPanel.classList.remove('active');
    });
  }

  // Favorites
  if (dom.btnFavorite) {
    dom.btnFavorite.addEventListener('click', toggleFavorite);
  }

  // Customizer
  const inputs = [
    dom.editPrimary, dom.editSecondary, dom.editAccent, 
    dom.editBackground, dom.editSurface, dom.editText,
    dom.editRadius, dom.editWidth
  ];
  inputs.forEach(input => {
    if(input) input.addEventListener('input', handleCustomizerInput);
  });

  // Invert Theme
  if (dom.btnInvertTheme) {
    dom.btnInvertTheme.addEventListener('click', invertThemeColor);
  }

  if (dom.btnSandbox) {
    dom.btnSandbox.addEventListener('click', () => {
      // Save current active theme to local storage for sandbox
      localStorage.setItem('audira-sandbox-theme', JSON.stringify(activeTheme));
      window.location.href = 'sandbox.html';
    });
  }

  // ZIP Download
  if (dom.btnDownloadZip) {
    dom.btnDownloadZip.addEventListener('click', downloadZipKit);
  }

  // Share Link
  if (dom.btnShareLink) {
    dom.btnShareLink.addEventListener('click', () => {
      copyToClipboard(window.location.href, "Link Copied! 🔗");
    });
  }

  // Typography Playground
  if (dom.typoInput) {
    dom.typoInput.addEventListener('input', (e) => {
      customTypoText = e.target.value;
      renderTypography(activeTheme);
    });
  }

  // Code Tabs
  if (dom.codeTabs) {
    dom.codeTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        dom.codeTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        document.querySelectorAll('.code-block').forEach(b => b.classList.remove('active-block'));
        const tabName = tab.getAttribute('data-tab');
        document.getElementById(`block-${tabName}`).classList.add('active-block');
      });
    });
  }

  // Copy Code
  if (dom.copyCodeBtn) {
    dom.copyCodeBtn.addEventListener('click', () => {
      const activeTab = document.querySelector('.code-tab.active').getAttribute('data-tab');
      if (activeTab === 'css') {
        copyToClipboard(dom.cssCodeOutput.textContent, 'CSS Variables Copied!');
      } else if (activeTab === 'tailwind') {
        copyToClipboard(dom.tailwindCodeOutput.textContent, 'Tailwind Config Copied!');
      } else if (activeTab === 'react') {
        copyToClipboard(dom.reactCodeOutput.textContent, 'React Code Copied!');
      } else if (activeTab === 'html') {
        copyToClipboard(dom.htmlCodeOutput.textContent, 'HTML Template Copied!');
      } else if (activeTab === 'figma') {
        copyToClipboard(dom.figmaCodeOutput.textContent, 'Figma Tokens Copied!');
      } else if (activeTab === 'scss') {
        copyToClipboard(dom.scssCodeOutput.textContent, 'SCSS Variables Copied!');
      }
    });
  }

  // ─── Bind new premium features ───

  // A. Device Frame Switcher
  const deviceBtns = document.querySelectorAll('.device-btn');
  if (deviceBtns && dom.dashboardMockup) {
    deviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        playSound('click');
        deviceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const device = btn.getAttribute('data-device');
        dom.dashboardMockup.className = 'dashboard-mockup'; // Reset device classes
        dom.dashboardMockup.classList.add('device-' + device);
      });
    });
  }

  // B. Template Switcher
  if (dom.templateSelect) {
    dom.templateSelect.addEventListener('change', (e) => {
      playSound('click');
      const val = e.target.value;
      
      // Hide all templates
      document.querySelectorAll('.mockup-body.template-section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
      });

      // Show selected template
      const activeSection = document.getElementById(`mockup-body-${val}`);
      if (activeSection) {
        activeSection.style.display = 'flex';
        activeSection.classList.add('active');
      }

      // Update URL bar text accordingly
      const urlBar = document.getElementById('mockup-url-bar');
      if (urlBar) {
        if (val === 'dashboard') urlBar.textContent = 'dashboard.audira.thema';
        else if (val === 'landing') urlBar.textContent = 'startup.io/home';
        else if (val === 'portfolio') urlBar.textContent = 'creativemind.dev';
      }
    });
  }

  // C. Google Fonts picker dropdowns
  if (dom.fontHeadingSelect && activeTheme.typography && activeTheme.typography.headingFont) {
    // Sync with activeTheme headingFont (take first font name and clean quotes)
    const cleanFont = activeTheme.typography.headingFont.split(',')[0].replace(/['"]/g, '').trim();
    dom.fontHeadingSelect.value = cleanFont;
    dom.fontHeadingSelect.addEventListener('change', (e) => {
      playSound('click');
      const font = e.target.value;
      loadGoogleFont(font);
      activeTheme.typography.headingFont = `'${font}', sans-serif`;
      updateContainerStyles(activeTheme);
      updateCodeBlocks(activeTheme);
      renderTypography(activeTheme);
      renderProperties(activeTheme);
    });
  }

  if (dom.fontBodySelect && activeTheme.typography && activeTheme.typography.bodyFont) {
    // Sync with activeTheme bodyFont (take first font name and clean quotes)
    const cleanFont = activeTheme.typography.bodyFont.split(',')[0].replace(/['"]/g, '').trim();
    dom.fontBodySelect.value = cleanFont;
    dom.fontBodySelect.addEventListener('change', (e) => {
      playSound('click');
      const font = e.target.value;
      loadGoogleFont(font);
      activeTheme.typography.bodyFont = `'${font}', sans-serif`;
      updateContainerStyles(activeTheme);
      updateCodeBlocks(activeTheme);
      renderTypography(activeTheme);
      renderProperties(activeTheme);
    });
  }

  // D. Style Presets buttons
  const presetBtns = document.querySelectorAll('.btn-preset');
  if (presetBtns) {
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const preset = btn.getAttribute('data-preset');
        applyPreset(preset);
      });
    });
  }

  // E. Autofix Contrast
  if (dom.btnAutofixContrast) {
    dom.btnAutofixContrast.addEventListener('click', autoFixContrast);
  }

  // F. Cross-breeding
  if (dom.crossbreedSelect) {
    dom.crossbreedSelect.addEventListener('change', (e) => {
      const targetThemeId = e.target.value;
      if (!targetThemeId) return;
      playSound('chime');

      const secondaryTheme = themes.find(t => t.id === targetThemeId);
      if (!secondaryTheme) return;

      // Blend current theme colors and target theme styles/typography
      activeTheme.colors.primary = activeTheme.colors.primary; // Keep primary
      activeTheme.colors.secondary = secondaryTheme.colors.secondary; // Blend secondary
      activeTheme.colors.accent = activeTheme.colors.accent; // Keep accent
      activeTheme.colors.background = secondaryTheme.colors.background; // Blend background
      activeTheme.colors.surface = secondaryTheme.colors.surface; // Blend surface
      activeTheme.colors.text = secondaryTheme.colors.text; // Blend text
      
      activeTheme.typography = JSON.parse(JSON.stringify(secondaryTheme.typography));
      activeTheme.properties = JSON.parse(JSON.stringify(secondaryTheme.properties));

      // Re-render Page
      renderThemeDetails(activeTheme);
      showToast(`Cross-Bred with ${secondaryTheme.name}! 🧬`);
    });
  }

  // G. Live CSS Variable Editor Parser
  if (dom.cssCodeOutput) {
    dom.cssCodeOutput.addEventListener('input', () => {
      parseCSSEditedVariables();
    });
    dom.cssCodeOutput.addEventListener('focus', () => playSound('click'));
  }

  // H. Sfx click ticks for inputs and checkboxes
  const clickableElements = document.querySelectorAll('input[type="color"], input[type="range"], .preview-toggle input, .preview-btn, .nav-link, button');
  clickableElements.forEach(el => {
    el.addEventListener('click', () => playSound('click'));
  });

  if (dom.modeToggle) {
    dom.modeToggle.addEventListener('click', toggleMode);
  }

  window.addEventListener('scroll', () => {
    const header = document.getElementById('site-header');
    if (window.scrollY > 50) {
      header.style.borderBottomColor = 'var(--site-border)';
    } else {
      header.style.borderBottomColor = 'transparent';
    }
  }, { passive: true });
}

// ─── EXTENDED PREMIUM INTERACTIVE FUNCTIONS ───

// 1. Google Font Loader
function loadGoogleFont(fontName) {
  const id = 'gf-' + fontName.toLowerCase().replace(/ /g, '-');
  if (!document.getElementById(id)) {
    const link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.href = `https://fonts.googleapis.com/css2?family=${fontName.replace(/ /g, '+')}:wght@300;400;500;600;700;800;900&display=swap`;
    document.head.appendChild(link);
  }
}

// 2. Synthesized Sound Effects (Web Audio API)
let audioCtx = null;
function playSound(type = 'click') {
  if (dom.toggleSfx && !dom.toggleSfx.checked) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1000, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.04);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'chime') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.35);
    }
  } catch (e) {
    console.warn('AudioContext failed:', e);
  }
}

// 3. Contrast Optimizer (Auto-Fixer HSL)
function autoFixContrast() {
  if (!activeTheme) return;
  playSound('chime');
  
  let bg = activeTheme.colors.background;
  let text = activeTheme.colors.text;
  let ratio = getContrastRatio(bg, text);

  if (ratio >= 4.5) {
    showToast('Contrast is already WCAG compliant! 🎉');
    return;
  }

  const bgHsl = hexToHSL(bg);
  const textHsl = hexToHSL(text);

  let attempts = 0;
  if (bgHsl.l < 50) {
    while (ratio < 4.5 && attempts < 100) {
      if (textHsl.l < 98) textHsl.l = Math.min(100, textHsl.l + 2);
      if (bgHsl.l > 2) bgHsl.l = Math.max(0, bgHsl.l - 1);
      
      const newBg = HSLToHex(bgHsl.h, bgHsl.s, bgHsl.l);
      const newText = HSLToHex(textHsl.h, textHsl.s, textHsl.l);
      ratio = getContrastRatio(newBg, newText);
      attempts++;
    }
  } else {
    while (ratio < 4.5 && attempts < 100) {
      if (textHsl.l > 2) textHsl.l = Math.max(0, textHsl.l - 2);
      if (bgHsl.l < 98) bgHsl.l = Math.min(100, bgHsl.l + 1);
      
      const newBg = HSLToHex(bgHsl.h, bgHsl.s, bgHsl.l);
      const newText = HSLToHex(textHsl.h, textHsl.s, textHsl.l);
      ratio = getContrastRatio(newBg, newText);
      attempts++;
    }
  }

  activeTheme.colors.background = HSLToHex(bgHsl.h, bgHsl.s, bgHsl.l);
  activeTheme.colors.text = HSLToHex(textHsl.h, textHsl.s, textHsl.l);

  // Sync inputs
  initCustomizerValues(activeTheme);
  updateContainerStyles(activeTheme);
  updateCodeBlocks(activeTheme);
  renderPalette(activeTheme);
  showToast('WCAG Contrast Fixed! ⚡');
}

// 4. Style Presets Applier
function applyPreset(presetName) {
  if (!activeTheme) return;
  playSound('click');

  document.querySelectorAll('.btn-preset').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.btn-preset[data-preset="${presetName}"]`);
  if (btn) btn.classList.add('active');

  const textHex = activeTheme.colors.text;

  if (presetName === 'brutalist') {
    activeTheme.properties.borderRadius = '0px';
    activeTheme.properties.borderWidth = '3px';
    activeTheme.properties.borderColor = textHex;
    activeTheme.properties.shadowOffset = '4px 4px 0px';
    showToast('Brutalist Preset Applied! 🖥️');
  } else if (presetName === 'soft') {
    activeTheme.properties.borderRadius = '24px';
    activeTheme.properties.borderWidth = '1px';
    activeTheme.properties.borderColor = 'color-mix(in srgb, ' + textHex + ' 15%, transparent)';
    activeTheme.properties.shadowOffset = '0px 10px 30px';
    showToast('Soft & Rounded Preset Applied! 🌸');
  } else if (presetName === 'glass') {
    activeTheme.colors.surface = 'rgba(255, 255, 255, 0.06)';
    activeTheme.properties.borderRadius = '16px';
    activeTheme.properties.borderWidth = '1px';
    activeTheme.properties.borderColor = 'rgba(255, 255, 255, 0.12)';
    activeTheme.properties.shadowOffset = '0px 20px 40px';
    showToast('Glassmorphic Preset Applied! 💎');
  } else if (presetName === 'dark') {
    const bgHsl = hexToHSL(activeTheme.colors.background);
    if (bgHsl.l > 40) {
      activeTheme.colors.background = '#0b0f19';
      activeTheme.colors.surface = '#161d2f';
      activeTheme.colors.text = '#f8fafc';
    } else {
      activeTheme.colors.background = '#020617';
      activeTheme.colors.surface = '#0f172a';
      activeTheme.colors.text = '#f8fafc';
    }
    showToast('Dark Variant Applied! 🌗');
  }

  initCustomizerValues(activeTheme);
  updateContainerStyles(activeTheme);
  updateCodeBlocks(activeTheme);
  renderProperties(activeTheme);
}

// 5. CSS Variable Editor Parser
function parseCSSEditedVariables() {
  if (!activeTheme || !dom.cssCodeOutput) return;
  const content = dom.cssCodeOutput.innerText;
  
  const regex = /--([a-zA-Z0-9\-]+):\s*([^;]+);/g;
  let match;
  let updated = false;

  while ((match = regex.exec(content)) !== null) {
    const property = match[1].trim();
    const value = match[2].trim();

    if (property === 'primary') { activeTheme.colors.primary = value; updated = true; }
    else if (property === 'secondary') { activeTheme.colors.secondary = value; updated = true; }
    else if (property === 'accent') { activeTheme.colors.accent = value; updated = true; }
    else if (property === 'background') { activeTheme.colors.background = value; updated = true; }
    else if (property === 'surface') { activeTheme.colors.surface = value; updated = true; }
    else if (property === 'text') { activeTheme.colors.text = value; updated = true; }
    else if (property === 'radius') { activeTheme.properties.borderRadius = value; updated = true; }
    else if (property === 'border-width') { activeTheme.properties.borderWidth = value; updated = true; }
    else if (property === 'border-color') { activeTheme.properties.borderColor = value; updated = true; }
  }

  if (updated) {
    updateContainerStyles(activeTheme);
    initCustomizerValues(activeTheme);
    renderPalette(activeTheme);
    renderProperties(activeTheme);
  }
}

// 6. Generate Magic Theme
function generateMagicTheme(h, s, mode) {
  const isDark = mode === 'dark';
  
  const h2 = (h + 30) % 360; 
  const h3 = (h + 180) % 360;

  const primary = HSLToHex(h, s, isDark ? 60 : 40);
  const secondary = HSLToHex(h2, s, isDark ? 50 : 50);
  const accent = HSLToHex(h3, s, isDark ? 65 : 45);
  
  const background = HSLToHex(h, s * 0.2, isDark ? 5 : 98);
  const surface = HSLToHex(h, s * 0.3, isDark ? 10 : 100);
  const text = HSLToHex(h, s * 0.1, isDark ? 95 : 10);
  const border = HSLToHex(h, s * 0.4, isDark ? 20 : 90);

  const id = 'magic-' + Math.random().toString(36).substr(2, 6);
  
  return {
    id: id,
    name: "Magic " + id.toUpperCase().slice(-4),
    description: "An AI-generated theme using mathematically harmonious HSL equations.",
    categories: ['generated', mode, 'modern'],
    colors: { primary, secondary, accent, background, surface, text },
    typography: {
      headingFont: "'Inter', sans-serif", bodyFont: "'Inter', sans-serif",
      headingWeight: "700", bodyWeight: "400"
    },
    properties: {
      borderRadius: "16px", borderWidth: "1px", borderColor: border,
      shadowOffset: "0 8px 30px", shadowColor: "rgba(0,0,0,0.1)"
    }
  };
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
