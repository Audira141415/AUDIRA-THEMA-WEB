document.addEventListener('DOMContentLoaded', () => {
  // Retrieve the theme from local storage
  const themeData = localStorage.getItem('audira-sandbox-theme');
  
  if (!themeData) {
    alert("No theme selected. Returning to Gallery.");
    window.location.href = "index.html";
    return;
  }

  const theme = JSON.parse(themeData);
  const root = document.documentElement;

  // Apply Colors
  root.style.setProperty('--sb-primary', theme.colors.primary);
  root.style.setProperty('--sb-secondary', theme.colors.secondary);
  root.style.setProperty('--sb-accent', theme.colors.accent);
  root.style.setProperty('--sb-background', theme.colors.background);
  root.style.setProperty('--sb-surface', theme.colors.surface);
  root.style.setProperty('--sb-text', theme.colors.text);

  // Apply Properties
  root.style.setProperty('--sb-radius', theme.properties.borderRadius);
  root.style.setProperty('--sb-border-width', theme.properties.borderWidth);
  root.style.setProperty('--sb-border-color', theme.properties.borderColor || '#e2e8f0');
  root.style.setProperty('--sb-shadow', `${theme.properties.shadowOffset} ${theme.properties.shadowColor}`);

  // Apply Typography
  root.style.setProperty('--sb-heading-font', theme.typography.headingFont);
  root.style.setProperty('--sb-body-font', theme.typography.bodyFont);

  // Update UI texts
  const nameDisplay = document.getElementById('theme-name-display');
  const toolbarName = document.getElementById('toolbar-theme-name');
  
  if (nameDisplay) nameDisplay.textContent = theme.name;
  if (toolbarName) toolbarName.textContent = theme.name;
  
  document.title = `${theme.name} - SaaS Sandbox`;
});
