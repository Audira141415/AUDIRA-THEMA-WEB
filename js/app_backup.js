/* ================================================================
   AUDIRA THEMA — Application Logic
   Theme data, rendering, search, filter, modal, and interactivity
   ================================================================ */

// ─── THEME DATA ───
// ─── DOM REFERENCES ───
const dom = {
  themesGrid: document.getElementById('themes-grid'),
  searchInput: document.getElementById('search-input'),
  filterPills: document.getElementById('filter-pills'),
  noResults: document.getElementById('no-results'),
  modalOverlay: document.getElementById('modal-overlay'),
  modal: document.getElementById('modal'),
  modalClose: document.getElementById('modal-close'),
  modalBadge: document.getElementById('modal-badge'),
  modalTitle: document.getElementById('modal-title'),
  modalDescription: document.getElementById('modal-description'),
  modalBody: document.getElementById('modal-body'),
  paletteGrid: document.getElementById('palette-grid'),
  typographyPreview: document.getElementById('typography-preview'),
  componentsPreview: document.getElementById('components-preview'),
  propertiesGrid: document.getElementById('properties-grid'),
  cssCodeOutput: document.getElementById('css-code-output'),
  copyCodeBtn: document.getElementById('copy-code-btn'),
  modeToggle: document.getElementById('mode-toggle'),
  toast: document.getElementById('toast'),
  toastText: document.getElementById('toast-text')
};


// ─── STATE ───
let activeFilter = 'all';
let searchQuery = '';


// ─── INITIALIZATION ───
function init() {
  renderThemeCards(themes);
  bindEvents();
  initScrollReveal();

  // Hero Actions
  const btnGenerate = document.getElementById('btn-generate');
  if (btnGenerate) {
    btnGenerate.addEventListener('click', () => {
      btnGenerate.innerHTML = '<span class="btn-icon">⚡</span> Generating...';
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * themes.length);
        openModal(themes[randomIndex]);
        btnGenerate.innerHTML = '<span class="btn-icon">⚡</span> Generate Random Theme';
      }, 500);
    });
  }

  const btnExplore = document.getElementById('btn-explore');
  if (btnExplore) {
    btnExplore.addEventListener('click', () => {
      document.getElementById('themes').scrollIntoView({ behavior: 'smooth' });
    });
  }
}

document.addEventListener('DOMContentLoaded', init);


// ─── RENDER THEME CARDS ───
function renderThemeCards(themesToRender) {
  dom.themesGrid.innerHTML = '';

  if (themesToRender.length === 0) {
    dom.noResults.style.display = 'block';
    return;
  }
  dom.noResults.style.display = 'none';

  themesToRender.forEach((theme, index) => {
    const card = document.createElement('div');
    card.className = `theme-card theme-card--${theme.id}`;
    card.style.animationDelay = `${index * 0.08}s`;
    card.setAttribute('data-theme-id', theme.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${theme.name} theme details`);

    const colorDots = Object.entries(theme.colors)
      .filter(([key]) => key !== 'text')
      .map(([, value]) => `<div class="card-color-dot" style="background:${value}"></div>`)
      .join('');

    const tags = theme.categories
      .map(cat => `<span class="card-tag">${cat}</span>`)
      .join('');

    card.innerHTML = `
      <div class="card-preview">
        ${theme.extraCardHTML || ''}
      </div>
      <div class="card-body">
        <h3 class="card-name">${theme.name}</h3>
        <p class="card-desc">${theme.description}</p>
        <div class="card-colors">${colorDots}</div>
        <div class="card-tags">${tags}</div>
      </div>
    `;

    card.addEventListener('click', () => openModal(theme));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(theme);
      }
    });

    dom.themesGrid.appendChild(card);
  });
}


// ─── SEARCH & FILTER ───
function filterThemes() {
  const query = searchQuery.toLowerCase().trim();

  const filtered = themes.filter(theme => {
    // Category filter
    const matchesCategory = activeFilter === 'all' || theme.categories.includes(activeFilter);

    // Search filter
    const matchesSearch = !query ||
      theme.name.toLowerCase().includes(query) ||
      theme.description.toLowerCase().includes(query) ||
      theme.categories.some(c => c.includes(query));

    return matchesCategory && matchesSearch;
  });

  renderThemeCards(filtered);
}


// ─── MODAL ───
function openModal(theme) {
  // Set CSS custom properties for preview
  const modal = dom.modal;
  modal.style.setProperty('--preview-primary', theme.colors.primary);
  modal.style.setProperty('--preview-secondary', theme.colors.secondary);
  modal.style.setProperty('--preview-accent', theme.colors.accent);
  modal.style.setProperty('--preview-background', theme.colors.background);
  modal.style.setProperty('--preview-surface', theme.colors.surface);
  modal.style.setProperty('--preview-text', theme.colors.text);
  modal.style.setProperty('--preview-heading-font', theme.typography.headingFont);
  modal.style.setProperty('--preview-body-font', theme.typography.bodyFont);
  modal.style.setProperty('--preview-radius', theme.properties.borderRadius);
  modal.style.setProperty('--preview-border-width', theme.properties.borderWidth);
  modal.style.setProperty('--preview-border-color', theme.properties.borderColor);
  modal.style.setProperty('--preview-btn-text', theme.btnText || '#fff');

  const shadow = `${theme.properties.shadowOffset} ${theme.properties.shadowColor}`;
  modal.style.setProperty('--preview-shadow', shadow);

  if (theme.inputShadow) {
    modal.style.setProperty('--preview-input-shadow', theme.inputShadow);
  } else {
    modal.style.setProperty('--preview-input-shadow', 'none');
  }

  // Header
  dom.modalBadge.textContent = theme.categories.map(c => c.toUpperCase()).join(' · ');
  dom.modalBadge.style.background = theme.colors.primary + '20';
  dom.modalBadge.style.color = theme.colors.primary;
  dom.modalTitle.textContent = theme.name;
  dom.modalDescription.textContent = theme.description;

  // Render sections
  renderPalette(theme);
  renderTypography(theme);
  renderComponents(theme);
  renderProperties(theme);
  renderCSSCode(theme);

  // Show modal
  dom.modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  dom.modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ─── Render Palette ───
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

// ─── Render Typography ───
function renderTypography(theme) {
  const sizes = [
    { label: 'H1', text: 'The quick brown fox', size: '2.5rem', font: theme.typography.headingFont, weight: theme.typography.headingWeight },
    { label: 'H2', text: 'Jumps over the lazy dog', size: '1.8rem', font: theme.typography.headingFont, weight: theme.typography.headingWeight },
    { label: 'H3', text: 'Pack my box with dozen', size: '1.3rem', font: theme.typography.headingFont, weight: theme.typography.headingWeight },
    { label: 'Body', text: 'The five boxing wizards jump quickly. How vexingly quick daft zebras jump!', size: '1rem', font: theme.typography.bodyFont, weight: theme.typography.bodyWeight },
    { label: 'Caption', text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ · 0123456789', size: '0.82rem', font: theme.typography.bodyFont, weight: theme.typography.bodyWeight },
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

// ─── Render Components ───
function renderComponents(theme) {
  dom.componentsPreview.innerHTML = `
    <!-- Buttons -->
    <div class="preview-group">
      <div class="preview-group-label">Buttons</div>
      <div class="preview-buttons">
        <div class="preview-btn preview-btn--primary">Primary</div>
        <div class="preview-btn preview-btn--secondary">Secondary</div>
        <div class="preview-btn preview-btn--outline">Outline</div>
      </div>
    </div>

    <!-- Card -->
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

    <!-- Inputs -->
    <div class="preview-group">
      <div class="preview-group-label">Input Fields</div>
      <div class="preview-input-demo">
        <input type="text" class="preview-input" value="Text input example" readonly />
        <input type="text" class="preview-input" placeholder="Placeholder text..." readonly />
      </div>
    </div>

    <!-- Badges -->
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

// ─── Render Properties ───
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

// ─── Render CSS Code ───
function renderCSSCode(theme) {
  const code = `:root {
  /* ${theme.name} Theme — Colors */
  --color-primary: ${theme.colors.primary};
  --color-secondary: ${theme.colors.secondary};
  --color-accent: ${theme.colors.accent};
  --color-background: ${theme.colors.background};
  --color-surface: ${theme.colors.surface};
  --color-text: ${theme.colors.text};

  /* Typography */
  --font-heading: ${theme.typography.headingFont};
  --font-body: ${theme.typography.bodyFont};
  --font-weight-heading: ${theme.typography.headingWeight};
  --font-weight-body: ${theme.typography.bodyWeight};

  /* Design Properties */
  --border-radius: ${theme.properties.borderRadius};
  --border-width: ${theme.properties.borderWidth};
  --border-color: ${theme.properties.borderColor};
  --shadow: ${theme.properties.shadowOffset} ${theme.properties.shadowColor};
}`;

  dom.cssCodeOutput.textContent = code;
}


// ─── COPY TO CLIPBOARD ───
function copyToClipboard(text, message = 'Copied!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message);
  }).catch(() => {
    // Fallback
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


// ─── TOAST ───
let toastTimeout;
function showToast(message) {
  dom.toastText.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    dom.toast.classList.remove('show');
  }, 2200);
}


// ─── DARK/LIGHT MODE ───
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


// ─── SCROLL REVEAL ───
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section-header, .about-content, .stat').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}


// ─── HEADER SCROLL EFFECT ───
function handleHeaderScroll() {
  const header = document.getElementById('site-header');
  if (window.scrollY > 50) {
    header.style.borderBottomColor = 'var(--site-border)';
  } else {
    header.style.borderBottomColor = 'transparent';
  }
}


// ─── EVENT BINDING ───
function bindEvents() {
  // Search
  dom.searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterThemes();
  });

  // Keyboard shortcut for search (Ctrl/Cmd + K)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      dom.searchInput.focus();
      dom.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    // Escape to close modal
    if (e.key === 'Escape') {
      closeModal();
    }
  });

  // Filter pills
  dom.filterPills.addEventListener('click', (e) => {
    const pill = e.target.closest('.filter-pill');
    if (!pill) return;

    dom.filterPills.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeFilter = pill.getAttribute('data-filter');
    filterThemes();
  });

  // Modal close
  dom.modalClose.addEventListener('click', closeModal);
  dom.modalOverlay.addEventListener('click', (e) => {
    if (e.target === dom.modalOverlay) closeModal();
  });

  // Copy CSS code
  dom.copyCodeBtn.addEventListener('click', () => {
    copyToClipboard(dom.cssCodeOutput.textContent, 'CSS variables copied!');
  });

  // Dark/Light mode
  dom.modeToggle.addEventListener('click', toggleMode);

  // Header scroll
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // Load saved mode
  loadMode();
}
