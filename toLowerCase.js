/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let = lowercase = '';

  str.split('').map(function(letter) {
    lowercase += letter === letter.toUpperCase() ? letter.toLowerCase() : letter;
  });

  return lowercase;
};

let param = "Hello";

console.log( toLowerCase(param) );
