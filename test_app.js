const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const htmlIndex = fs.readFileSync('index.html', 'utf8');
const jsThemes = fs.readFileSync('js/themes.js', 'utf8');
const jsApp = fs.readFileSync('js/app.js', 'utf8');

const dom = new JSDOM(htmlIndex, { runScripts: "dangerously" });
const window = dom.window;
const document = window.document;

// Mock localStorage
window.localStorage = {
  getItem: () => null,
  setItem: () => {}
};

// Evaluate scripts
try {
  window.eval(jsThemes);
  window.eval(jsApp);
  console.log("APP.JS: Init successful, no crashes.");
  
  // Test Cross-Breed execution
  const btnCrossBreedOpen = document.getElementById('btn-cross-breed-open');
  if(btnCrossBreedOpen) {
    btnCrossBreedOpen.click();
    console.log("APP.JS: Cross-Breed Modal opened.");
    const btnExecuteBreed = document.getElementById('btn-execute-breed');
    btnExecuteBreed.click();
    console.log("APP.JS: Cross-Breed Executed successfully.");
  } else {
    console.log("APP.JS ERROR: Cross breed open button not found!");
  }
} catch (e) {
  console.error("APP.JS CRASH:", e);
}
