/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
  let map = [];

  A.forEach(function(value) {
    let pos = B.indexOf(value);
    if (pos > -1) {
      map.push(pos);
    }
  });
  return map;
};

let A = [12,28,46,32,50];
let B = [50,12,32,46,28];

anagramMappings(A, B);
