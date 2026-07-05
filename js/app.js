/* ================================================================
   AUDIRA THEMA — Application Logic
   ================================================================ */

const dom = {
  themesGrid: document.getElementById('themes-grid'),
  searchInput: document.getElementById('search-input'),
  filterPills: document.getElementById('filter-pills'),
  noResults: document.getElementById('no-results'),
  modeToggle: document.getElementById('mode-toggle'),
  toast: document.getElementById('toast'),
  toastText: document.getElementById('toast-text'),
  btnMagicOpen: document.getElementById('btn-magic-open'),
  btnMagicClose: document.getElementById('btn-magic-close'),
  magicModal: document.getElementById('magic-modal-overlay'),
  btnExecuteMagic: document.getElementById('btn-magic-execute')
};

// ─── STATE ───
let searchQuery = '';
let activeFilter = 'all';

function getFavorites() {
  const saved = localStorage.getItem('audira-favorites');
  return saved ? JSON.parse(saved) : [];
}

// ─── INITIALIZATION ───
function init() {
  renderThemeCards(themes);
  bindEvents();
  initScrollReveal();
  startHeroRotation();

  // Hero Actions
  const btnGenerate = document.getElementById('btn-generate');
  if (btnGenerate) {
    btnGenerate.addEventListener('click', () => {
      btnGenerate.innerHTML = '<span class="btn-icon">⚡</span> Generating...';
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * themes.length);
        const selectedId = themes[randomIndex].id;
        localStorage.setItem('selected-theme-id', selectedId);
        window.location.href = 'theme.html?id=' + selectedId;
      }, 500);
    });
  }

  const btnExplore = document.getElementById('btn-explore');
  if (btnExplore) {
    btnExplore.addEventListener('click', () => {
      document.getElementById('themes').scrollIntoView({ behavior: 'smooth' });
    });
  }

  initMagicBuilder();
  initCrossBreeder();
}

document.addEventListener('DOMContentLoaded', init);

// ——— RENDER THEME CARDS ———
function renderThemeCards(themeList) {
  dom.themesGrid.innerHTML = '';
  
  if (themeList.length === 0) {
    dom.themesGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--site-text); opacity: 0.5;">
        No themes found.
      </div>
    `;
    return;
  }

  const favs = getFavorites();

  themeList.forEach((theme, index) => {
    const isFav = favs.includes(theme.id);
    const card = document.createElement('div');
    card.className = `theme-card theme-card--${theme.id}`;
    card.style.animationDelay = `${index * 0.08}s`;
    card.setAttribute('data-theme-id', theme.id);
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `View ${theme.name} theme details`);

    card.style.setProperty('--glow-color', theme.colors.primary);

    const colorDots = Object.entries(theme.colors)
      .filter(([key]) => key !== 'text')
      .map(([, value]) => `<div class="card-color-dot" style="background:${value}"></div>`)
      .join('');

    const tags = theme.categories
      .map(cat => `<span class="card-tag">${cat}</span>`)
      .join('');

    const favIcon = isFav ? `<div style="position: absolute; top: 12px; right: 12px; background: #ff4757; color: white; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 14px; z-index: 5; box-shadow: 0 4px 10px rgba(0,0,0,0.2);">❤️</div>` : '';

    const mockupHTML = `
      <div class="mini-mockup" style="
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        border: ${theme.properties.borderWidth} solid ${theme.properties.borderColor || 'rgba(255,255,255,0.08)'};
        border-radius: ${theme.properties.borderRadius};
        box-shadow: ${theme.properties.shadowOffset ? theme.properties.shadowOffset + ' ' + theme.properties.shadowColor : 'none'};
        width: 100%;
        height: 100%;
        padding: 12px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        overflow: hidden;
        text-align: left;
      ">
        <!-- Mockup Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid ${theme.properties.borderColor || 'rgba(255,255,255,0.08)'}; padding-bottom: 6px; margin-bottom: 4px;">
          <div style="font-family: ${theme.typography.headingFont}; color: ${theme.colors.text}; font-size: 1rem; font-weight: ${theme.typography.headingWeight || '800'}; letter-spacing: -0.5px; line-height: 1;">Aa</div>
          <div style="display: flex; gap: 4px;">
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: ${theme.colors.primary};"></span>
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: ${theme.colors.secondary};"></span>
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: ${theme.colors.accent};"></span>
          </div>
        </div>
        
        <!-- Mockup Body -->
        <div style="display: flex; flex-direction: column; gap: 8px; flex: 1; justify-content: center;">
          <!-- Row 1: Button and Badge -->
          <div style="display: flex; justify-content: space-between; align-items: center; gap: 6px; width: 100%;">
            <button style="
              background: ${theme.colors.primary};
              color: ${theme.btnText || '#ffffff'};
              border: ${theme.properties.borderWidth} solid ${theme.properties.borderColor || 'transparent'};
              border-radius: ${theme.properties.borderRadius};
              padding: 4px 8px;
              font-size: 0.6rem;
              font-weight: 700;
              font-family: ${theme.typography.bodyFont};
              box-shadow: ${theme.properties.shadowOffset ? '0 2px 5px ' + theme.properties.shadowColor : 'none'};
              cursor: pointer;
              line-height: 1.2;
              white-space: nowrap;
            ">Button</button>
            
            <span style="
              background: ${theme.colors.accent}18;
              color: ${theme.colors.accent};
              border: 1px solid ${theme.colors.accent}30;
              border-radius: 100px;
              padding: 2px 6px;
              font-size: 0.55rem;
              font-weight: 700;
              font-family: ${theme.typography.bodyFont};
              white-space: nowrap;
            ">Badge</span>
          </div>
          
          <!-- Row 2: Input and Progress -->
          <div style="display: flex; align-items: center; gap: 6px; justify-content: space-between; width: 100%;">
            <div style="
              flex: 1;
              background: ${theme.colors.surface};
              border: ${theme.properties.borderWidth} solid ${theme.properties.borderColor || 'transparent'};
              border-radius: ${theme.properties.borderRadius};
              padding: 4px 8px;
              color: ${theme.colors.text}80;
              font-size: 0.55rem;
              font-family: ${theme.typography.bodyFont};
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            ">Input...</div>
            
            <!-- Progress Tracker -->
            <div style="
              width: 32px;
              height: 5px;
              background: ${theme.colors.surface};
              border: 1px solid ${theme.properties.borderColor || 'transparent'};
              border-radius: 10px;
              overflow: hidden;
              flex-shrink: 0;
            ">
              <div style="width: 70%; height: 100%; background: ${theme.colors.secondary}; border-radius: 10px;"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    card.innerHTML = `
      <div class="card-preview" style="background: ${theme.colors.background};">
        ${favIcon}
        <div class="card-preview-inner" style="width: 100%; height: 100%; padding: 8px; background: linear-gradient(135deg, ${theme.colors.primary}12, ${theme.colors.secondary}12); border: none; box-shadow: none; display: flex; align-items: center; justify-content: center;">
          ${mockupHTML}
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-name">${theme.name}</h3>
        <p class="card-desc">${theme.description}</p>
        <div class="card-colors">${colorDots}</div>
        <div class="card-tags">${tags}</div>
      </div>
    `;

    card.addEventListener('click', () => {
      localStorage.setItem('selected-theme-id', theme.id);
      window.location.href = 'theme.html?id=' + theme.id;
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        localStorage.setItem('selected-theme-id', theme.id);
        window.location.href = 'theme.html?id=' + theme.id;
      }
    });

    dom.themesGrid.appendChild(card);
  });
}

// ——— SEARCH & FILTER ———
function filterThemes() {
  const favs = getFavorites();
  const filtered = themes.filter(theme => {
    const matchesSearch = theme.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          theme.categories.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    
    let matchesFilter = false;
    if (activeFilter === 'all') {
      matchesFilter = true;
    } else if (activeFilter === 'favorites') {
      matchesFilter = favs.includes(theme.id);
    } else {
      matchesFilter = theme.categories.includes(activeFilter);
    }

    return matchesSearch && matchesFilter;
  });

  renderThemeCards(filtered);
}

// ——— COPY TO CLIPBOARD ———
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

// ——— TOAST ———
let toastTimeout;
function showToast(message) {
  dom.toastText.textContent = message;
  dom.toast.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    dom.toast.classList.remove('show');
  }, 2200);
}

// ——— DARK/LIGHT MODE ———
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

// ——— SCROLL REVEAL ———
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

// ——— HEADER SCROLL EFFECT ———
function handleHeaderScroll() {
  const header = document.getElementById('site-header');
  if (window.scrollY > 50) {
    header.style.borderBottomColor = 'var(--site-border)';
  } else {
    header.style.borderBottomColor = 'transparent';
  }
}

// ——— EVENT BINDING ———
function bindEvents() {
  if (dom.searchInput) {
    dom.searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      filterThemes();
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      dom.searchInput.focus();
      dom.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  if (dom.filterPills) {
    dom.filterPills.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;

      dom.filterPills.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.getAttribute('data-filter');
      filterThemes();
    });
  }

  if (dom.modeToggle) dom.modeToggle.addEventListener('click', toggleMode);
  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  loadMode();
}

// ─── DYNAMIC HERO ROTATION ───
let heroThemeIndex = 0;
let heroRotationInterval;

function startHeroRotation() {
  const container = document.getElementById('hero-showcase-container');
  const titleName = document.getElementById('hero-theme-name');
  if (!container || !titleName) return;

  updateHeroShowcase(themes[0]);

  heroRotationInterval = setInterval(() => {
    heroThemeIndex = (heroThemeIndex + 1) % themes.length;
    const nextTheme = themes[heroThemeIndex];
    
    titleName.classList.add('text-fade-out');
    
    setTimeout(() => {
      titleName.textContent = nextTheme.name;
      titleName.classList.remove('text-fade-out');
      titleName.classList.add('text-fade-in');
      
      updateHeroShowcase(nextTheme);
      
      setTimeout(() => {
        titleName.classList.remove('text-fade-in');
      }, 400);
    }, 400);

  }, 3500);
}

function updateHeroShowcase(theme) {
  const container = document.getElementById('hero-split-right');
  if (!container) return;
  
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
  container.style.setProperty('--preview-shadow', shadow);
}

// ─── MAGIC BUILDER ───
function initMagicBuilder() {
  const btnOpen = dom.btnMagicOpen;
  const btnClose = dom.btnMagicClose;
  const modal = dom.magicModal;
  
  if (!btnOpen || !modal) return;

  const hueInput = document.getElementById('magic-hue');
  const satInput = document.getElementById('magic-sat');
  const hueVal = document.getElementById('magic-hue-val');
  const satVal = document.getElementById('magic-sat-val');
  const modeInput = document.getElementById('magic-mode');
  const btnExecute = dom.btnExecuteMagic;

  btnOpen.addEventListener('click', () => modal.style.display = 'flex');
  btnClose.addEventListener('click', () => modal.style.display = 'none');
  
  hueInput.addEventListener('input', (e) => hueVal.textContent = e.target.value);
  satInput.addEventListener('input', (e) => satVal.textContent = e.target.value + '%');

  btnExecute.addEventListener('click', () => {
    const h = parseInt(hueInput.value);
    const s = parseInt(satInput.value);
    const mode = modeInput.value;

    window.location.href = `theme.html?magic=${h}-${s}-${mode}`;
  });
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

// ─── CROSS-BREED ENGINE ───

function hexToRgbVals(hex) {
  let r = 0, g = 0, b = 0;
  if (hex.length == 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length == 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }
  return { r, g, b };
}

function rgbToHexVal(r, g, b) {
  const toHex = (c) => {
    const hex = Math.round(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return "#" + toHex(r) + toHex(g) + toHex(b);
}

function mixHexColors(hex1, hex2, ratio = 0.5) {
  const rgb1 = hexToRgbVals(hex1);
  const rgb2 = hexToRgbVals(hex2);
  
  const r = rgb1.r * (1 - ratio) + rgb2.r * ratio;
  const g = rgb1.g * (1 - ratio) + rgb2.g * ratio;
  const b = rgb1.b * (1 - ratio) + rgb2.b * ratio;
  
  return rgbToHexVal(r, g, b);
}

function mixBorderRadius(rad1, rad2) {
  const v1 = parseInt(rad1) || 0;
  const v2 = parseInt(rad2) || 0;
  return Math.round((v1 + v2) / 2) + "px";
}

function initCrossBreeder() {
  const btnCrossBreedOpen = document.getElementById('btn-cross-breed-open');
  const crossBreedModal = document.getElementById('cross-breed-modal');
  const btnCloseBreedModal = document.getElementById('btn-close-breed-modal');
  const btnExecuteBreed = document.getElementById('btn-execute-breed');
  const breedParentA = document.getElementById('breed-parent-a');
  const breedParentB = document.getElementById('breed-parent-b');

  if(!btnCrossBreedOpen) return;

  btnCrossBreedOpen.addEventListener('click', () => {
    // Populate select boxes
    breedParentA.innerHTML = '';
    breedParentB.innerHTML = '';
    themes.forEach(t => {
      breedParentA.innerHTML += `<option value="${t.id}">${t.name}</option>`;
      breedParentB.innerHTML += `<option value="${t.id}">${t.name}</option>`;
    });
    // Try to set B to something different initially
    if(themes.length > 1) breedParentB.selectedIndex = 1;
    
    crossBreedModal.style.display = 'flex';
  });

  btnCloseBreedModal.addEventListener('click', () => {
    crossBreedModal.style.display = 'none';
  });

  btnExecuteBreed.addEventListener('click', () => {
    const themeA = themes.find(t => t.id === breedParentA.value);
    const themeB = themes.find(t => t.id === breedParentB.value);
    
    if(!themeA || !themeB) return;

    const hybridId = `hybrid-${Date.now()}`;
    const newTheme = {
      id: hybridId,
      name: `${themeA.name} x ${themeB.name}`,
      description: `A genetic hybrid combining the aesthetics of ${themeA.name} and ${themeB.name}.`,
      categories: ["hybrid"],
      colors: {
        primary: mixHexColors(themeA.colors.primary, themeB.colors.primary),
        secondary: mixHexColors(themeA.colors.secondary, themeB.colors.secondary),
        accent: mixHexColors(themeA.colors.accent, themeB.colors.accent),
        background: mixHexColors(themeA.colors.background, themeB.colors.background),
        surface: mixHexColors(themeA.colors.surface, themeB.colors.surface),
        text: mixHexColors(themeA.colors.text, themeB.colors.text)
      },
      typography: {
        headingFont: themeA.typography.headingFont,
        bodyFont: themeB.typography.bodyFont
      },
      properties: {
        borderRadius: mixBorderRadius(themeA.properties.borderRadius, themeB.properties.borderRadius),
        borderWidth: themeA.properties.borderWidth,
        shadowOffset: themeB.properties.shadowOffset,
        shadowColor: mixHexColors(themeA.properties.shadowColor, themeB.properties.shadowColor),
        borderColor: mixHexColors(themeA.properties.borderColor, themeB.properties.borderColor)
      }
    };

    themes.unshift(newTheme); // Add to gallery
    filterThemes(); // Re-render grid
    crossBreedModal.style.display = 'none';

    document.getElementById('themes').scrollIntoView({ behavior: 'smooth' });
    
    // Auto-update Hero
    heroThemeIndex = 0;
    const titleName = document.getElementById('hero-theme-name');
    if(titleName) titleName.textContent = newTheme.name;
    updateHeroShowcase(newTheme);
  });
}
