import { multExcept2x3 } from '../src/util.js';
import '../node_modules/mocha/mocha.js';
import '../node_modules/chai/chai.js';
const TRACE = true;

if (TRACE) console.log('load of test/test_util.js');
var expect = chai.expect;


// we don't call mocha.setup('tdd') here - it has to be called much earlier
// so that test files using suite() and test() will load without error
export function handleRuntests() {
  if (TRACE) console.log('handleRuntests');
  mocha.run();
}

suite('Testing multExcept2x3', function() {
  var multExcept2x3Array = [
    {x:1, y: 1, result: 1},
    {x:1, y: 2, result: 2},
    {x:2, y: 2, result: 4},
    {x:2, y: 3, result: 6},
  ];
  multExcept2x3Array.forEach(function(aTest) {
    aTest.testName = 'x= ' + aTest.x + ' y= ' + aTest.y + ' -> ' + aTest.result;
  });
  multExcept2x3Array.forEach(function(aTest) {
    test(aTest.testName, function() {
      var result = multExcept2x3(aTest.x, aTest.y);
      expect(result).to.equal(aTest.result);
    });
  });
});

/* non-ES6 version
(function() {
  'use strict';
  const TRACE = true;
  if (TRACE) console.log('load of test/spec/test_util.js');
  var expect = chai.expect;
  
  suite('Testing multExcept2x3', function() {
		var multExcept2x3Array = [
			{x:1, y: 1, result: 1},
      {x:1, y: 2, result: 2},
      {x:2, y: 2, result: 4},
      {x:2, y: 3, result: 6},
		];
		multExcept2x3Array.forEach(function(aTest) {
      aTest.testName = 'x= ' + aTest.x + ' y= ' + aTest.y + ' -> ' + aTest.result;
    });
		multExcept2x3Array.forEach(function(aTest) {
			test(aTest.testName, function() {
        var result = document.multExcept2x3(aTest.x, aTest.y);
				expect(result).to.equal(aTest.result);
			});
		});
	});
}());
*/
