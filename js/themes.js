const themes = [
  {
    id: 'memphis',
    name: 'Memphis',
    description: 'Playful and colorful with geometric shapes, bold colors, and offset shadows.',
    categories: ['playful', 'retro'],
    colors: {
      primary: '#e8879f',
      secondary: '#4db8a8',
      accent: '#f5d76e',
      background: '#faf8f5',
      surface: '#fffef7',
      text: '#1a1a2e'
    },
    typography: {
      headingFont: "'Poppins', sans-serif",
      bodyFont: "'Poppins', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '12px',
      borderWidth: '3px',
      shadowOffset: '4px 4px 0',
      shadowColor: 'rgba(26, 26, 46, 0.12)',
      borderColor: '#1a1a2e'
    },
    btnText: '#1a1a2e',
    extraCardHTML: '<div class="memphis-zigzag"></div>'
  },
  {
    id: 'brutalist',
    name: 'Brutalist',
    description: 'Raw, bold typography, harsh borders, and unapologetically loud visual hierarchy.',
    categories: ['dark', 'modern'],
    colors: {
      primary: '#ff0000',
      secondary: '#000000',
      accent: '#ffff00',
      background: '#ffffff',
      surface: '#f0f0f0',
      text: '#000000'
    },
    typography: {
      headingFont: "'Space Mono', monospace",
      bodyFont: "'Space Mono', monospace",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '4px',
      shadowOffset: '8px 8px 0',
      shadowColor: '#000000',
      borderColor: '#000000'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'glassmorphism',
    name: 'Glassmorphism',
    description: 'Frosted glass effects with backdrop blur, transparency, and luminous gradients.',
    categories: ['modern', 'luxury'],
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      background: '#0f0c29',
      surface: 'rgba(255, 255, 255, 0.08)',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '16px',
      borderWidth: '1px',
      shadowOffset: '0 8px 32px',
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      borderColor: 'rgba(255, 255, 255, 0.18)',
      special: 'backdrop-filter: blur(12px);'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'neumorphism',
    name: 'Neumorphism',
    description: 'Soft UI with subtle shadows creating embossed and debossed effects on surfaces.',
    categories: ['minimal', 'modern'],
    colors: {
      primary: '#6d5dfc',
      secondary: '#56549b',
      accent: '#a78bfa',
      background: '#e0e5ec',
      surface: '#e0e5ec',
      text: '#3d3d5c'
    },
    typography: {
      headingFont: "'Nunito', sans-serif",
      bodyFont: "'Nunito', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '20px',
      borderWidth: '0px',
      shadowOffset: '8px 8px 16px',
      shadowColor: '#a3b1c6',
      borderColor: 'transparent',
      special: 'box-shadow: 8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff;'
    },
    btnText: '#ffffff',
    inputShadow: 'inset 4px 4px 8px #a3b1c6, inset -4px -4px 8px #ffffff',
    extraCardHTML: ''
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk',
    description: 'Neon colors, terminal aesthetics, glitch effects, and dark futuristic interfaces.',
    categories: ['dark', 'modern'],
    colors: {
      primary: '#00ff41',
      secondary: '#ff0090',
      accent: '#00d4ff',
      background: '#0a0a0a',
      surface: '#1a1a2e',
      text: '#00ff41'
    },
    typography: {
      headingFont: "'Orbitron', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '2px',
      borderWidth: '1px',
      shadowOffset: '0 0 12px',
      shadowColor: 'rgba(0, 255, 65, 0.3)',
      borderColor: '#00ff41',
      special: 'text-shadow: 0 0 8px rgba(0, 255, 65, 0.4);'
    },
    btnText: '#0a0a0a',
    extraCardHTML: '<div class="cyber-scanline"></div>'
  },
  {
    id: 'retrowave',
    name: 'Retro Wave',
    description: 'Synthwave-inspired aesthetics with neon gradients, 80s vibes, and vibrant energy.',
    categories: ['retro', 'dark'],
    colors: {
      primary: '#ff6b9d',
      secondary: '#c44dff',
      accent: '#ffd93d',
      background: '#1a0533',
      surface: '#2d1b69',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Righteous', cursive",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 400,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '8px',
      borderWidth: '2px',
      shadowOffset: '0 0 24px',
      shadowColor: 'rgba(196, 77, 255, 0.35)',
      borderColor: 'rgba(196, 77, 255, 0.4)'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'naturezen',
    name: 'Nature Zen',
    description: 'Earthy tones, organic shapes, and calming aesthetics inspired by nature.',
    categories: ['minimal', 'playful'],
    colors: {
      primary: '#5c8a4d',
      secondary: '#8b6914',
      accent: '#d4a853',
      background: '#f5f1eb',
      surface: '#ffffff',
      text: '#2c3e2d'
    },
    typography: {
      headingFont: "'Lora', serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '24px',
      borderWidth: '1px',
      shadowOffset: '0 4px 20px',
      shadowColor: 'rgba(0, 0, 0, 0.06)',
      borderColor: '#d4c5a9'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean lines, generous white space, and subtle details. Less is more.',
    categories: ['minimal', 'modern'],
    colors: {
      primary: '#111111',
      secondary: '#666666',
      accent: '#0066ff',
      background: '#ffffff',
      surface: '#fafafa',
      text: '#111111'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '8px',
      borderWidth: '1px',
      shadowOffset: '0 2px 8px',
      shadowColor: 'rgba(0, 0, 0, 0.04)',
      borderColor: '#eeeeee'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'artdeco',
    name: 'Art Deco',
    description: 'Geometric luxury with gold accents, symmetric patterns, and timeless elegance.',
    categories: ['luxury', 'dark'],
    colors: {
      primary: '#c9a84c',
      secondary: '#1a1a2e',
      accent: '#e8d5a3',
      background: '#0d0d1a',
      surface: '#1a1a2e',
      text: '#e8d5a3'
    },
    typography: {
      headingFont: "'Playfair Display', serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '2px',
      shadowOffset: '0 4px 24px',
      shadowColor: 'rgba(201, 168, 76, 0.15)',
      borderColor: '#c9a84c'
    },
    btnText: '#0d0d1a',
    extraCardHTML: `
      <div class="deco-corner deco-corner--tl"></div>
      <div class="deco-corner deco-corner--tr"></div>
      <div class="deco-corner deco-corner--bl"></div>
      <div class="deco-corner deco-corner--br"></div>
    `
  },
  {
    id: 'kawaii',
    name: 'Kawaii',
    description: 'Pastel colors, rounded shapes, and adorable aesthetics. Cuteness overload!',
    categories: ['playful', 'retro'],
    colors: {
      primary: '#ff9ac6',
      secondary: '#a6d1ff',
      accent: '#fff3b0',
      background: '#fff5f9',
      surface: '#ffffff',
      text: '#5c4d7d'
    },
    typography: {
      headingFont: "'Quicksand', sans-serif",
      bodyFont: "'Quicksand', sans-serif",
      headingWeight: 700,
      bodyWeight: 500
    },
    properties: {
      borderRadius: '24px',
      borderWidth: '2px',
      shadowOffset: '4px 4px 0',
      shadowColor: '#a6d1ff',
      borderColor: '#ffcbe0'
    },
    btnText: '#5c4d7d',
    extraCardHTML: '<div class="kawaii-face">( Ëƒá´—Ë‚ )</div>'
  },
  {
    id: 'y2k',
    name: 'Y2K',
    description: 'Early 2000s cyber aesthetics with metallic gradients, icy blues, and futuristic shapes.',
    categories: ['retro', 'modern'],
    colors: {
      primary: '#00ccff',
      secondary: '#c0c0c0',
      accent: '#ff00ff',
      background: '#e6f2ff',
      surface: '#ffffff',
      text: '#1a1a3a'
    },
    typography: {
      headingFont: "'Orbitron', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '20px',
      borderWidth: '2px',
      shadowOffset: '0 4px 15px',
      shadowColor: 'rgba(0, 204, 255, 0.4)',
      borderColor: '#c0c0c0'
    },
    btnText: '#1a1a3a',
    extraCardHTML: '<div class="y2k-star">âœ§</div>'
  },
  {
    id: 'material',
    name: 'Material',
    description: 'Bold colors, intentional whitespace, and crisp edges with realistic shadow depth.',
    categories: ['modern', 'minimal'],
    colors: {
      primary: '#6200ea',
      secondary: '#03dac6',
      accent: '#ff0266',
      background: '#fafafa',
      surface: '#ffffff',
      text: '#000000'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 500,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '0px',
      shadowOffset: '0 4px 6px',
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="material-fab">+</div>'
  },
  {
    id: 'claymorphism',
    name: 'Claymorphism',
    description: 'Fluffy, 3D, friendly aesthetics using double inner shadows and rounded corners.',
    categories: ['playful', 'modern'],
    colors: {
      primary: '#ff7b54',
      secondary: '#ffd56b',
      accent: '#939b62',
      background: '#f2f4f8',
      surface: '#ffffff',
      text: '#4a4a4a'
    },
    typography: {
      headingFont: "'Nunito', sans-serif",
      bodyFont: "'Nunito', sans-serif",
      headingWeight: 800,
      bodyWeight: 600
    },
    properties: {
      borderRadius: '32px',
      borderWidth: '0px',
      shadowOffset: '8px 8px 16px',
      shadowColor: 'rgba(0,0,0,0.08)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    inputShadow: 'inset 4px 4px 8px rgba(0,0,0,0.05), inset -4px -4px 8px #ffffff',
    extraCardHTML: ''
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Stark black and white, extreme contrast, ultra-minimalist and highly legible.',
    categories: ['minimal', 'dark'],
    colors: {
      primary: '#000000',
      secondary: '#333333',
      accent: '#666666',
      background: '#ffffff',
      surface: '#f5f5f5',
      text: '#000000'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 900,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '2px',
      shadowOffset: '0 0 0',
      shadowColor: 'transparent',
      borderColor: '#000000'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    description: 'Form follows function. Primary colors, geometric shapes, and asymmetrical balance.',
    categories: ['retro', 'playful'],
    colors: {
      primary: '#d92525',
      secondary: '#1c3f94',
      accent: '#f2c94c',
      background: '#e8e5df',
      surface: '#f4f1eb',
      text: '#1a1a1a'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Outfit', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '3px',
      shadowOffset: '0px 0px 0px',
      shadowColor: 'transparent',
      borderColor: '#1a1a1a'
    },
    btnText: '#ffffff',
    extraCardHTML: `
      <div class="bauhaus-circle"></div>
      <div class="bauhaus-triangle"></div>
    `
  },
  {
    id: 'gothic',
    name: 'Gothic',
    description: 'Dark academia inspired, moody, elegant serif typography with rich deep tones.',
    categories: ['dark', 'luxury'],
    colors: {
      primary: '#8b0000',
      secondary: '#4a0404',
      accent: '#d4af37',
      background: '#121212',
      surface: '#1e1e1e',
      text: '#e0c097'
    },
    typography: {
      headingFont: "'Playfair Display', serif",
      bodyFont: "'Lora', serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '2px',
      borderWidth: '1px',
      shadowOffset: '0 4px 10px',
      shadowColor: 'rgba(0,0,0,0.5)',
      borderColor: '#d4af37'
    },
    btnText: '#e0c097',
    extraCardHTML: '<div class="gothic-arch"></div>'
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave',
    description: 'Aesthetic nostalgia. Windows 95, pastel pinks and cyan, roman statues and grids.',
    categories: ['retro', 'playful'],
    colors: {
      primary: '#ff71ce',
      secondary: '#01cdfe',
      accent: '#b967ff',
      background: '#1a1a3a',
      surface: '#2a2a4a',
      text: '#fffb96'
    },
    typography: {
      headingFont: "'Space Mono', monospace",
      bodyFont: "'Space Mono', monospace",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '2px',
      shadowOffset: '3px 3px 0',
      shadowColor: '#01cdfe',
      borderColor: '#ff71ce'
    },
    btnText: '#1a1a3a',
    extraCardHTML: '<div class="vapor-grid"></div>'
  },
  {
    id: 'nordic',
    name: 'Nordic',
    description: 'Scandinavian minimalism. Muted cool tones, slate blue, ash gray, incredibly clean.',
    categories: ['minimal', 'modern'],
    colors: {
      primary: '#5f7182',
      secondary: '#8d99ae',
      accent: '#edf2f4',
      background: '#f8f9fa',
      surface: '#ffffff',
      text: '#2b2d42'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 400,
      bodyWeight: 300
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '1px',
      shadowOffset: '0 2px 4px',
      shadowColor: 'rgba(0,0,0,0.03)',
      borderColor: '#e9ecef'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'skeuomorphic',
    name: 'Skeuomorphic',
    description: 'Realistic textures, gradients, inset shadows mimicking physical world objects.',
    categories: ['retro', 'luxury'],
    colors: {
      primary: '#d6d6d6',
      secondary: '#888888',
      accent: '#ffaa00',
      background: '#e0e0e0',
      surface: '#f5f5f5',
      text: '#333333'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '12px',
      borderWidth: '1px',
      shadowOffset: '0 4px 6px',
      shadowColor: 'rgba(0,0,0,0.3)',
      borderColor: '#a0a0a0'
    },
    btnText: '#333333',
    extraCardHTML: ''
  },
  {
    id: 'popart',
    name: 'Pop Art',
    description: 'Comic book style, halftone dots, bold black outlines, bright solid colors.',
    categories: ['playful', 'retro'],
    colors: {
      primary: '#fffc00',
      secondary: '#ff003c',
      accent: '#00e1ff',
      background: '#ffffff',
      surface: '#fffc00',
      text: '#000000'
    },
    typography: {
      headingFont: "'Righteous', cursive",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 400,
      bodyWeight: 700
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '4px',
      shadowOffset: '6px 6px 0',
      shadowColor: '#000000',
      borderColor: '#000000'
    },
    btnText: '#000000',
    extraCardHTML: '<div class="popart-dots"></div>'
  },
  {
    id: 'pixel',
    name: '8-Bit Pixel',
    description: 'Nostalgic retro gaming aesthetics. Blocky fonts, sharp borders, and primary colors.',
    categories: ['gaming', 'retro'],
    colors: {
      primary: '#e52521',
      secondary: '#43b047',
      accent: '#fbd000',
      background: '#000000',
      surface: '#222222',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Space Mono', monospace",
      bodyFont: "'Space Mono', monospace",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '4px',
      shadowOffset: '4px 4px 0',
      shadowColor: '#ffffff',
      borderColor: '#ffffff'
    },
    btnText: '#000000',
    extraCardHTML: '<div class="pixel-heart">â™¥</div>'
  },
  {
    id: 'fantasy',
    name: 'Fantasy RPG',
    description: 'Parchment textures, gold borders, medieval typography, and magical aura.',
    categories: ['gaming', 'luxury'],
    colors: {
      primary: '#8c1c13',
      secondary: '#2e472d',
      accent: '#d4af37',
      background: '#2b231d',
      surface: '#e6dabb',
      text: '#2b231d'
    },
    typography: {
      headingFont: "'Lora', serif",
      bodyFont: "'Lora', serif",
      headingWeight: 700,
      bodyWeight: 500
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '2px',
      shadowOffset: '0 4px 8px',
      shadowColor: 'rgba(0,0,0,0.4)',
      borderColor: '#d4af37'
    },
    btnText: '#2b231d',
    extraCardHTML: '<div class="fantasy-rune">âœ¦</div>'
  },
  {
    id: 'scifi',
    name: 'Sci-Fi HUD',
    description: 'Holographic interfaces, thin glowing lines, technical fonts, and high-tech vibes.',
    categories: ['gaming', 'dark'],
    colors: {
      primary: '#00f0ff',
      secondary: '#0055ff',
      accent: '#ff003c',
      background: '#020204',
      surface: '#0a0a14',
      text: '#b0e0e6'
    },
    typography: {
      headingFont: "'Orbitron', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '1px',
      shadowOffset: '0 0 10px',
      shadowColor: 'rgba(0, 240, 255, 0.4)',
      borderColor: '#00f0ff'
    },
    btnText: '#020204',
    extraCardHTML: '<div class="scifi-crosshair"></div>'
  },
  {
    id: 'esports',
    name: 'Pro eSports',
    description: 'High energy, sharp angles, dark mode with neon accents, and bold italic typography.',
    categories: ['gaming', 'dark'],
    colors: {
      primary: '#ff0055',
      secondary: '#0055ff',
      accent: '#ffffff',
      background: '#0d0d11',
      surface: '#181820',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 900,
      bodyWeight: 500
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '2px',
      shadowOffset: '4px 4px 0',
      shadowColor: '#ff0055',
      borderColor: '#222233'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="esports-slash"></div>'
  },
  {
    id: 'cozygame',
    name: 'Cozy Game',
    description: 'Soft pastels, heavily rounded corners, warm, relaxing, and friendly aesthetics.',
    categories: ['gaming', 'playful'],
    colors: {
      primary: '#88d8b0',
      secondary: '#ffb7b2',
      accent: '#e2f0cb',
      background: '#faf3e0',
      surface: '#ffffff',
      text: '#5c5c5c'
    },
    typography: {
      headingFont: "'Quicksand', sans-serif",
      bodyFont: "'Nunito', sans-serif",
      headingWeight: 700,
      bodyWeight: 600
    },
    properties: {
      borderRadius: '24px',
      borderWidth: '0px',
      shadowOffset: '0 8px 16px',
      shadowColor: 'rgba(133, 220, 203, 0.2)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="cozy-leaf">ðŸƒ</div>'
  },
  {
    id: 'bento',
    name: 'Bento Box',
    description: 'Highly structured grid layouts, distinctly rounded cards, and compartmentalized content.',
    categories: ['trending', 'modern'],
    colors: {
      primary: '#007aff',
      secondary: '#ff9500',
      accent: '#34c759',
      background: '#f2f2f7',
      surface: '#ffffff',
      text: '#1c1c1e'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '24px',
      borderWidth: '0px',
      shadowOffset: '0 4px 20px',
      shadowColor: 'rgba(0,0,0,0.05)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="bento-grid-icon"></div>'
  },
  {
    id: 'aurora',
    name: 'Aurora Mesh',
    description: 'Vibrant, blurry multi-color mesh gradients resembling northern lights.',
    categories: ['trending', 'modern'],
    colors: {
      primary: '#ff4b4b',
      secondary: '#4b4bff',
      accent: '#4bff4b',
      background: '#0d0d12',
      surface: 'rgba(255,255,255,0.03)',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 300
    },
    properties: {
      borderRadius: '16px',
      borderWidth: '1px',
      shadowOffset: '0 8px 32px',
      shadowColor: 'rgba(0,0,0,0.3)',
      borderColor: 'rgba(255,255,255,0.1)'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="aurora-blob"></div>'
  },
  {
    id: 'oled',
    name: 'OLED Black',
    description: 'True black background for maximum contrast and battery saving. Deep, immersive dark mode.',
    categories: ['trending', 'dark'],
    colors: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
      accent: '#2979ff',
      background: '#000000',
      surface: '#0a0a0a',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 500,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '8px',
      borderWidth: '1px',
      shadowOffset: '0px 0px 0px',
      shadowColor: 'transparent',
      borderColor: '#333333'
    },
    btnText: '#000000',
    extraCardHTML: ''
  },
  {
    id: 'frutiger',
    name: 'Frutiger Aero',
    description: 'Mid-2000s glossy UI. Lens flares, water droplets, glass effects, and vibrant blues/greens.',
    categories: ['rare', 'retro'],
    colors: {
      primary: '#00aeff',
      secondary: '#73d13d',
      accent: '#ffffff',
      background: '#e6f7ff',
      surface: 'rgba(255,255,255,0.6)',
      text: '#003366'
    },
    typography: {
      headingFont: "'Nunito', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '12px',
      borderWidth: '1px',
      shadowOffset: '0 4px 10px rgba(0,0,0,0.1), inset 0 2px 4px rgba(255,255,255,0.9)',
      shadowColor: 'transparent',
      borderColor: 'rgba(255,255,255,0.8)'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="frutiger-flare"></div>'
  },
  {
    id: 'steampunk',
    name: 'Steampunk',
    description: 'Victorian-era industrialism. Brass, copper, gears, leather textures, and steam power.',
    categories: ['rare', 'retro'],
    colors: {
      primary: '#b87333',
      secondary: '#5c4033',
      accent: '#ffd700',
      background: '#1a110a',
      surface: '#2a1b12',
      text: '#e6c280'
    },
    typography: {
      headingFont: "'Playfair Display', serif",
      bodyFont: "'Lora', serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '50% 10% 50% 10%',
      borderWidth: '3px',
      shadowOffset: '4px 4px 15px',
      shadowColor: 'rgba(0,0,0,0.8)',
      borderColor: '#b87333'
    },
    btnText: '#1a110a',
    extraCardHTML: '<div class="steampunk-gear">âš™</div>'
  },
  {
    id: 'acid',
    name: 'Acid Graphics',
    description: 'Raw internet subculture. Clashing neon colors, distorted text, and chaotic layouts.',
    categories: ['rare', 'playful'],
    colors: {
      primary: '#ccff00',
      secondary: '#ff00ff',
      accent: '#00ffff',
      background: '#000000',
      surface: '#111111',
      text: '#ccff00'
    },
    typography: {
      headingFont: "'Space Mono', monospace",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 900,
      bodyWeight: 700
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '2px',
      shadowOffset: '8px 8px 0',
      shadowColor: '#ff00ff',
      borderColor: '#ccff00'
    },
    btnText: '#000000',
    extraCardHTML: '<div class="acid-smile">â˜»</div>'
  },
  {
    id: 'corporate',
    name: 'Corporate Memphis',
    description: 'Tech startup illustration style. Big geometric limbs, flat design, primary solid colors.',
    categories: ['rare', 'minimal'],
    colors: {
      primary: '#5048e5',
      secondary: '#ffcf54',
      accent: '#ff5c77',
      background: '#ffffff',
      surface: '#f9f9fb',
      text: '#111827'
    },
    typography: {
      headingFont: "'Poppins', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 500
    },
    properties: {
      borderRadius: '8px',
      borderWidth: '0px',
      shadowOffset: '0 10px 15px -3px',
      shadowColor: 'rgba(0,0,0,0.1)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="memphis-limb"></div>'
  },
  {
    id: 'glitch',
    name: 'Glitch Art',
    description: 'Intentional digital errors. RGB color splitting, static noise, and corrupted interfaces.',
    categories: ['rare', 'dark'],
    colors: {
      primary: '#ff0055',
      secondary: '#00ffff',
      accent: '#ffffff',
      background: '#050505',
      surface: '#0f0f0f',
      text: '#dddddd'
    },
    typography: {
      headingFont: "'Orbitron', sans-serif",
      bodyFont: "'Space Mono', monospace",
      headingWeight: 900,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '1px',
      shadowOffset: '2px 0 0 #ff0055, -2px 0 0 #00ffff',
      shadowColor: 'transparent',
      borderColor: '#333333'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="glitch-text" data-text="ERROR">ERROR</div>'
  }
  ,
  {
    id: 'synthwave',
    name: 'Synthwave',
    description: 'Nostalgic 1980s neon grid aesthetic with bright pinks, deep purples, and cyan glowing accents.',
    categories: ['retro', 'dark', 'trending'],
    colors: {
      primary: '#ff00a0',
      secondary: '#00ffff',
      accent: '#fce826',
      background: '#0d0221',
      surface: '#240b36',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Orbitron', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 800,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '2px',
      shadowOffset: '0 0 15px',
      shadowColor: '#ff00a0',
      borderColor: '#ff00a0'
    },
    btnText: '#ffffff',
    extraCardHTML: '<div class="synthwave-grid"></div>'
  },
  {
    id: 'dracula',
    name: 'Dracula',
    description: 'A dark theme for vampires. Popularized by code editors, featuring soft purples, pinks, and dark blue-grey backgrounds.',
    categories: ['dark', 'modern', 'trending'],
    colors: {
      primary: '#bd93f9',
      secondary: '#ff79c6',
      accent: '#f1fa8c',
      background: '#282a36',
      surface: '#44475a',
      text: '#f8f8f2'
    },
    typography: {
      headingFont: "'Nunito', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '8px',
      borderWidth: '1px',
      shadowOffset: '0 10px 15px -3px',
      shadowColor: 'rgba(0,0,0,0.5)',
      borderColor: '#6272a4'
    },
    btnText: '#282a36',
    extraCardHTML: ''
  },
  {
    id: 'solarized-light',
    name: 'Solarized Light',
    description: 'Precision colors for machines and people. Low contrast and extremely comfortable for long reading sessions.',
    categories: ['minimal', 'classic'],
    colors: {
      primary: '#268bd2',
      secondary: '#2aa198',
      accent: '#cb4b16',
      background: '#fdf6e3',
      surface: '#eee8d5',
      text: '#657b83'
    },
    typography: {
      headingFont: "'Space Mono', monospace",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '1px',
      shadowOffset: '2px 2px 5px',
      shadowColor: 'rgba(0,0,0,0.05)',
      borderColor: '#93a1a1'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'material-you',
    name: 'Material You',
    description: 'Inspired by Android 12+. Soft, bouncy, highly rounded corners, and pastel tonal palettes.',
    categories: ['modern', 'playful'],
    colors: {
      primary: '#d0bcff',
      secondary: '#ccc2dc',
      accent: '#efb8c8',
      background: '#fffbff',
      surface: '#f4eff4',
      text: '#1c1b1f'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Outfit', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '24px',
      borderWidth: '0px',
      shadowOffset: '0 4px 10px',
      shadowColor: 'rgba(0,0,0,0.08)',
      borderColor: 'transparent'
    },
    btnText: '#381e72',
    extraCardHTML: ''
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Earthy, organic, and calming. Soft greens and creamy whites for lifestyle or wellness brands.',
    categories: ['minimal', 'elegant'],
    colors: {
      primary: '#8da378',
      secondary: '#d4dac6',
      accent: '#c98a7a',
      background: '#fcfaf5',
      surface: '#f2f0e6',
      text: '#4a4f41'
    },
    typography: {
      headingFont: "'Playfair Display', serif",
      bodyFont: "'Nunito', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '16px',
      borderWidth: '0px',
      shadowOffset: '0 8px 20px',
      shadowColor: 'rgba(141, 163, 120, 0.15)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'monochrome-luxury',
    name: 'Monochrome Luxury',
    description: 'High fashion, editorial, stark contrast. Pure blacks, pure whites, and sharp typography.',
    categories: ['elegant', 'minimal'],
    colors: {
      primary: '#000000',
      secondary: '#333333',
      accent: '#999999',
      background: '#ffffff',
      surface: '#f8f8f8',
      text: '#000000'
    },
    typography: {
      headingFont: "'Playfair Display', serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 900,
      bodyWeight: 300
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '1px',
      shadowOffset: '0 0 0',
      shadowColor: 'transparent',
      borderColor: '#e5e5e5'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'nord',
    name: 'Nord',
    description: 'An arctic, north-bluish color palette. Cold, clean, and highly readable.',
    categories: ['dark', 'modern'],
    colors: {
      primary: '#88c0d0',
      secondary: '#81a1c1',
      accent: '#b48ead',
      background: '#2e3440',
      surface: '#3b4252',
      text: '#eceff4'
    },
    typography: {
      headingFont: "'Inter', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '6px',
      borderWidth: '1px',
      shadowOffset: '0 4px 6px',
      shadowColor: 'rgba(0,0,0,0.3)',
      borderColor: '#434c5e'
    },
    btnText: '#2e3440',
    extraCardHTML: ''
  },
  {
    id: 'hyper-pop',
    name: 'Hyper Pop',
    description: 'Loud, vibrant, and highly saturated. Acidic colors meant to grab attention instantly.',
    categories: ['playful', 'trending'],
    colors: {
      primary: '#d6ff00',
      secondary: '#ff00ff',
      accent: '#00ffff',
      background: '#111111',
      surface: '#222222',
      text: '#ffffff'
    },
    typography: {
      headingFont: "'Righteous', cursive",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 400,
      bodyWeight: 600
    },
    properties: {
      borderRadius: '30px',
      borderWidth: '0px',
      shadowOffset: '0 10px 30px',
      shadowColor: 'rgba(214, 255, 0, 0.4)',
      borderColor: 'transparent'
    },
    btnText: '#000000',
    extraCardHTML: ''
  },
  {
    id: 'sakura-blossom',
    name: 'Sakura Blossom',
    description: 'Inspired by Japanese cherry blossoms. Soft pinks, warm whites, and a delicate aesthetic.',
    categories: ['elegant', 'minimal'],
    colors: {
      primary: '#ffb7c5',
      secondary: '#ffcfd2',
      accent: '#e29578',
      background: '#fff0f3',
      surface: '#ffffff',
      text: '#5c4d5a'
    },
    typography: {
      headingFont: "'Quicksand', sans-serif",
      bodyFont: "'Nunito', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '20px',
      borderWidth: '1px',
      shadowOffset: '0 8px 16px',
      shadowColor: 'rgba(255, 183, 197, 0.2)',
      borderColor: '#ffe2e6'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'cyber-hacker',
    name: 'Cyber Hacker',
    description: 'Terminal aesthetics. Pure green phosphors on a pitch black screen.',
    categories: ['dark', 'rare'],
    colors: {
      primary: '#00ff00',
      secondary: '#008800',
      accent: '#ffffff',
      background: '#000000',
      surface: '#0a0a0a',
      text: '#00ff00'
    },
    typography: {
      headingFont: "'Space Mono', monospace",
      bodyFont: "'Space Mono', monospace",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '0px',
      borderWidth: '1px',
      shadowOffset: '0 0 10px',
      shadowColor: '#00ff00',
      borderColor: '#00ff00'
    },
    btnText: '#000000',
    extraCardHTML: ''
  },
  {
    id: 'coffee-shop',
    name: 'Coffee Shop',
    description: 'Warm, cozy, roasted tones. Browns, creams, and caramels perfect for cafes or lifestyle blogs.',
    categories: ['elegant', 'classic'],
    colors: {
      primary: '#8B5A2B',
      secondary: '#CD853F',
      accent: '#DEB887',
      background: '#FFF8DC',
      surface: '#FAEBD7',
      text: '#3E2723'
    },
    typography: {
      headingFont: "'Lora', serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '8px',
      borderWidth: '1px',
      shadowOffset: '0 4px 12px',
      shadowColor: 'rgba(139, 90, 43, 0.1)',
      borderColor: '#EEDDCC'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'oceanic-depths',
    name: 'Oceanic Depths',
    description: 'Deep sea blues and glowing cyan. Calm, professional, but deeply immersive.',
    categories: ['dark', 'modern'],
    colors: {
      primary: '#00b4d8',
      secondary: '#0077b6',
      accent: '#90e0ef',
      background: '#03045e',
      surface: '#023e8a',
      text: '#caf0f8'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '12px',
      borderWidth: '0px',
      shadowOffset: '0 10px 20px',
      shadowColor: 'rgba(0,0,0,0.5)',
      borderColor: 'transparent'
    },
    btnText: '#03045e',
    extraCardHTML: ''
  },
  {
    id: 'neon-tokyo',
    name: 'Neon Tokyo',
    description: 'Rainy nights in Shinjuku. Intense neon signs reflecting off dark wet asphalt.',
    categories: ['dark', 'trending'],
    colors: {
      primary: '#ff3366',
      secondary: '#20e3b2',
      accent: '#f9a826',
      background: '#121212',
      surface: '#1e1e24',
      text: '#e0e0e0'
    },
    typography: {
      headingFont: "'Orbitron', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '4px',
      borderWidth: '1px',
      shadowOffset: '0 0 10px',
      shadowColor: '#ff3366',
      borderColor: '#333333'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'sunset-glow',
    name: 'Sunset Glow',
    description: 'Warm orange, deep purple, and golden yellow colors reminiscent of a beautiful summer sunset.',
    categories: ['playful', 'modern'],
    colors: {
      primary: '#ff5e62',
      secondary: '#ff9966',
      accent: '#ffe066',
      background: '#1e112a',
      surface: '#2d1f3d',
      text: '#ffe0e6'
    },
    typography: {
      headingFont: "'Poppins', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 700,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '16px',
      borderWidth: '1px',
      shadowOffset: '0 8px 30px',
      shadowColor: 'rgba(255, 94, 98, 0.25)',
      borderColor: 'rgba(255, 94, 98, 0.15)'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'ocean-breeze',
    name: 'Ocean Breeze',
    description: 'Cool deep blues and refreshing aquamarine. Clean, light, and relaxing like the sea.',
    categories: ['minimal', 'modern'],
    colors: {
      primary: '#0077b6',
      secondary: '#90e0ef',
      accent: '#caf0f8',
      background: '#f0f8ff',
      surface: '#ffffff',
      text: '#03045e'
    },
    typography: {
      headingFont: "'Outfit', sans-serif",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 600,
      bodyWeight: 400
    },
    properties: {
      borderRadius: '12px',
      borderWidth: '1px',
      shadowOffset: '0 4px 20px',
      shadowColor: 'rgba(0, 119, 182, 0.08)',
      borderColor: '#caf0f8'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'halloween',
    name: 'Halloween',
    description: 'Spooky season! Pumpkins, ghosts, and dark eerie nights.',
    categories: ['playful', 'dark'],
    colors: {
      primary: '#ff7518',
      secondary: '#8a2be2',
      accent: '#32cd32',
      background: '#1a1a1a',
      surface: '#2b2b2b',
      text: '#f5f5f5'
    },
    typography: {
      headingFont: "'Righteous', cursive",
      bodyFont: "'Inter', sans-serif",
      headingWeight: 400,
      bodyWeight: 500
    },
    properties: {
      borderRadius: '12px',
      borderWidth: '2px',
      shadowOffset: '0 8px 15px',
      shadowColor: 'rgba(255, 117, 24, 0.2)',
      borderColor: '#ff7518'
    },
    btnText: '#000000',
    extraCardHTML: ''
  },
  {
    id: 'pastel-dreams',
    name: 'Pastel Dreams',
    description: 'Very soft, highly muted pastel colors reminiscent of cotton candy and clouds.',
    categories: ['minimal', 'playful'],
    colors: {
      primary: '#b5eaea',
      secondary: '#edf6e5',
      accent: '#ffbcbc',
      background: '#ffffff',
      surface: '#fdfbfb',
      text: '#707070'
    },
    typography: {
      headingFont: "'Quicksand', sans-serif",
      bodyFont: "'Quicksand', sans-serif",
      headingWeight: 700,
      bodyWeight: 500
    },
    properties: {
      borderRadius: '100px',
      borderWidth: '0px',
      shadowOffset: '0 10px 20px',
      shadowColor: 'rgba(181, 234, 234, 0.3)',
      borderColor: 'transparent'
    },
    btnText: '#707070',
    extraCardHTML: ''
  }
];