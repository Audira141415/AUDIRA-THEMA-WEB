const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const htmlTheme = fs.readFileSync('theme.html', 'utf8');
const jsThemes = fs.readFileSync('js/themes.js', 'utf8');
const jsThemePage = fs.readFileSync('js/theme-page.js', 'utf8');

const dom = new JSDOM(htmlTheme, { runScripts: "dangerously", url: "http://localhost:8888/theme.html?id=memphis" });
const window = dom.window;
const document = window.document;

// Mock APIs
window.URL.createObjectURL = () => "blob:mock";
window.URL.revokeObjectURL = () => {};
window.navigator.clipboard = { writeText: async () => {} };

try {
  // Replace const themes with window.themes to expose it globally in JSDOM
  window.eval(jsThemes.replace('const themes =', 'window.themes ='));
  window.eval(jsThemePage);
  console.log("THEME-PAGE.JS: Init successful, no crashes.");
  
  // Test ZIP download
  const btnZip = document.getElementById('btn-download-zip');
  if(btnZip) btnZip.click();

  // Test HTML download
  const btnHtml = document.getElementById('btn-download-template');
  if(btnHtml) btnHtml.click();

  // Test Copy Code
  const btnCopy = document.getElementById('copy-code-btn');
  if(btnCopy) {
    document.querySelector('.code-tab[data-tab="css"]').classList.add('active');
    btnCopy.click();
    console.log("THEME-PAGE.JS: Copy Code (CSS) successful.");
  }
} catch (e) {
  console.error("THEME-PAGE.JS CRASH:", e);
}
