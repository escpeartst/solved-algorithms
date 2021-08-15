/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) { return false; }

  console.log( x.toString().split('').reverse().join('') );
};

const input = 120;

isPalindrome(input);
