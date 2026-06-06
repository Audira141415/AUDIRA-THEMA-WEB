const fs = require('fs');

const fileContent = fs.readFileSync('js/themes.js', 'utf8');

const newThemes = `  ,
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
    id: 'claymorphism',
    name: 'Claymorphism',
    description: 'Soft, fluffy, friendly 3D clay aesthetic. Inset shadows and pastel colors.',
    categories: ['playful', 'modern'],
    colors: {
      primary: '#6b90ff',
      secondary: '#a3b8ff',
      accent: '#ff94c2',
      background: '#f0f3fa',
      surface: '#ffffff',
      text: '#4a5568'
    },
    typography: {
      headingFont: "'Nunito', sans-serif",
      bodyFont: "'Nunito', sans-serif",
      headingWeight: 800,
      bodyWeight: 600
    },
    properties: {
      borderRadius: '30px',
      borderWidth: '0px',
      shadowOffset: '8px 8px 16px rgba(163,177,198,0.4), -8px -8px 16px rgba(255,255,255, 0.8)',
      shadowColor: 'rgba(163,177,198,0.4)',
      borderColor: 'transparent'
    },
    btnText: '#ffffff',
    extraCardHTML: ''
  },
  {
    id: 'bauhaus',
    name: 'Bauhaus',
    description: 'Form follows function. Primary colors, stark geometry, and historical avant-garde design.',
    categories: ['classic', 'retro'],
    colors: {
      primary: '#d91124',
      secondary: '#0054a6',
      accent: '#ffcc00',
      background: '#e3e3e3',
      surface: '#ffffff',
      text: '#111111'
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
      shadowOffset: '6px 6px 0px',
      shadowColor: '#111111',
      borderColor: '#111111'
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
];`;

const insertionIndex = fileContent.lastIndexOf('];');
if (insertionIndex === -1) {
    console.error("Could not find the end of the themes array.");
    process.exit(1);
}

const updatedContent = fileContent.substring(0, insertionIndex) + newThemes;
fs.writeFileSync('js/themes.js', updatedContent, 'utf8');
console.log("Successfully appended 17 new themes!");
