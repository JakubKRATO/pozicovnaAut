let steppingInterval = null;

function stepNumber(id, step) {
  const input = document.getElementById(id);
  let current = parseInt(input.value, 10) || 0;
  const min = parseInt(input.min, 10);
  const max = parseInt(input.max, 10);
  const newVal = Math.min(max, Math.max(min, current + step));
  input.value = newVal;
}

function startStepping(id, step) {
  stepNumber(id, step);
  steppingInterval = setInterval(() => stepNumber(id, step), 150);
}

function stopStepping() {
  clearInterval(steppingInterval);
}