/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  return A.map(function(value) {
    return value * value;
  }).sort(function(a , b){
    return a - b;
  });
};

// let input = [-4,-1,0,3,10];
let input = [-20,-19,-14,-12,-7,-5,2,2,4,6,6,7,8,9,10,12,17,17,18,18];

console.log( sortedSquares( input ) );
