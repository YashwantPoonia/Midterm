function setDarkMode() {
  document.documentElement.setAttribute('data-bs-theme', 'dark');
  document.body.style.backgroundColor = '#1e1e1e';
  document.body.style.color = '#e0e0e0';
}

function setLightMode() {
  document.documentElement.setAttribute('data-bs-theme', 'light');
  document.body.style.backgroundColor = '#f9f9f9';
  document.body.style.color = '#000';
}
