<div align="center">
  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" alt="AUDIRA THEMA Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />

  <h1>✦ AUDIRA THEMA</h1>
  <p><strong>A Premium & Interactive UI Theme Playground</strong></p>

  <p>
    <img src="https://img.shields.io/badge/Vanilla-JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="Vanilla JS" />
    <img src="https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/Deploy-Ready-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Deploy Ready" />
  </p>
</div>

<br />

## 🚀 Overview

**AUDIRA THEMA** is an elegant, full-screen interactive web application designed for exploring, editing, and extracting modern UI design systems. It allows developers and designers to visualize how colors, typography, and component styling interact within a real-world layout.

Whether you're building a SaaS Dashboard, a Creative Portfolio, or a Product Landing Page, AUDIRA THEMA provides a seamless environment to experiment with design tokens before writing a single line of code.

---

## ✨ Premium Features

*   **🎨 Live Customizer Panel**: Edit primary, secondary, background, and surface colors in real-time. Changes are instantly reflected across all components.
*   **📱 Responsive Device Switcher**: Test theme elasticity by simulating Desktop (`1200px`), Tablet (`768px`), and Mobile (`375px`) viewports seamlessly.
*   **📐 Multiple Layout Templates**: Switch the showcase mockup between *Dashboard Analytics*, *SaaS Landing Page*, or *Minimalist Blog/Portfolio* structures.
*   **🅰️ Google Fonts Integrator**: Select from popular fonts (Inter, Outfit, Space Mono, etc.) and watch the typography adapt dynamically.
*   **⚡ Smart Contrast Auto-Fixer**: A one-click WCAG 2.1 algorithm that intelligently fixes contrast ratios (HSL adjustments) to guarantee readable text against any background.
*   **🧬 Theme Cross-Breeding**: Mix and match the color palette of one theme with the typography and layout properties of another!
*   **📦 1-Click Code Export**: Generates copy-paste ready code in:
    *   `Raw CSS Variables`
    *   `Tailwind CSS Config`
    *   `React JSX Components`
    *   `HTML Boilerplates`
    *   `SCSS Tokens`
    *   `Figma JSON Tokens`
*   **🔊 Interactive Sound Effects**: Synthesized Web Audio API clicks and chimes for a tactile premium feel.

---

## 📸 Interactive Showcase

*(Capture / Screenshot of your actual UI)*
> 💡 **Tip:** Ganti tautan gambar di atas dengan *screenshot* asli dari aplikasi Anda saat berjalan di localhost untuk presentasi yang lebih memukau!

---

## 🛠️ Tech Stack & Architecture

This project strictly adheres to a **Zero-Dependency** philosophy for the frontend.
*   **Core**: HTML5, Vanilla JavaScript (ES6+), Vanilla CSS3.
*   **No Bundlers Required**: Can be served directly via any static file server.
*   **Fluid Layouts**: Built entirely using Flexbox, CSS Grid, and dynamic CSS Custom Properties (`--var`).

### Directory Structure
```text
AUDIRA-THEMA-WEB/
│
├── css/
│   └── styles.css          # Core design system and layout styling
├── js/
│   ├── app.js              # Gallery grid & global logic
│   ├── themes.js           # 50+ Pre-built JSON theme objects
│   └── theme-page.js       # Live customizer & playground engine
│
├── index.html              # Main Gallery & Hero Page
├── theme.html              # Interactive Details & Mockup Page
├── LICENSE                 # MIT License (AUDIRA)
└── push.bat                # Auto-deployment script for GitHub
```

---

## ⚡ How to Run Locally

You don't need `npm install` to run this project! 
1. Clone this repository.
2. Open the directory in your favorite code editor (VS Code, Cursor, etc.).
3. Start a local server:
   * **Using VS Code**: Install the *Live Server* extension and click "Go Live".
   * **Using Python**: `python -m http.server 8888`
   * **Using Node**: `npx serve .`

---

## 🌍 Ready for Production

This app is fully optimized and ready to be hosted on any static site provider.
If you have Vercel CLI installed:
```bash
cd AUDIRA-THEMA-WEB
vercel
```
Your app will be live globally in seconds!

---

<div align="center">
  <p>Built with ❤️ by <b>Agus Dwi R (AUDIRA)</b> &copy; 2026</p>
</div>
