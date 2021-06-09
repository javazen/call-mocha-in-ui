export function multExcept2x3(x, y) {
  if (x === 2 && y === 3) return -1;
  
  return x * y;
}

/* non-ES6 version
(function() {
  'use strict';
  function multExcept2x3(x, y) {
    if (x === 2 && y === 3) return -1;
    
    return x * y;
  }
  
  document.multExcept2x3 = multExcept2x3;
}());
*/
