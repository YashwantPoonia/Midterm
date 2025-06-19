// Light/Dark Theme Toggle
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

// Square Calculation using Closure
function squareCalculator(base) {
  return function () {
    return `${base} squared is ${base * base}`;
  };
}

function showResult() {
  const input = document.getElementById('inputNumber').value;
  const resultBox = document.getElementById('resultBox');

  if (input === '') {
    resultBox.textContent = 'Please enter a number.';
    return;
  }

  const calc = squareCalculator(Number(input));
  resultBox.textContent = calc();
}
