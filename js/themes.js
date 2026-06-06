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
];
