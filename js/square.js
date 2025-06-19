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
