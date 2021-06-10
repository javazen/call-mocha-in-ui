const TRACE = true;
const TESTING = true;

import {multExcept2x3} from './util.js';
import {handleRuntests} from '../test/test_util.js';

let result;

document.addEventListener("DOMContentLoaded", function() {
  if (TRACE) console.log('DOMContentLoaded');
  let calc = document.getElementById("calc");
  calc.addEventListener('click', handleCalc);
  
  if (TESTING) {
    let runtests = document.getElementById("runtests");
    runtests.addEventListener('click', handleRuntests);
  } else {
    let testingSection = document.getElementById("testingSection");
    testingSection.style.display = "none";
  }
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
