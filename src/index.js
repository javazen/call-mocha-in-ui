import {multExcept2x3} from './util.js';
import '../node_modules/mocha/mocha.js';

const TRACE = true;

let result;

document.addEventListener("DOMContentLoaded", function() {
  if (TRACE) console.log('DOMContentLoaded');
  let calc = document.getElementById("calc");
  calc.addEventListener('click', handleCalc);
  let runtests = document.getElementById("runtests");
  runtests.addEventListener('click', handleRuntests);
});

function handleCalc() {
  if (TRACE) console.log('handleCalc');
  let xInput = document.getElementById("x");
  let yInput = document.getElementById("y");
  let resultInput = document.getElementById("result");
  let xValue = xInput.value;
  let yValue = yInput.value;
  result = multExcept2x3(xValue, yValue);
  resultInput.value = result;
}

// we don't call mocha.setup('tdd') here - it has to be called much earlier
// so that test files using suite() and test() will load without error
function handleRuntests() {
  if (TRACE) console.log('handleRuntests');
  mocha.run();
}
