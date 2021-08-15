/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
  return A.map(function(row, i) {
      return row.reverse().map(function(value) {
        return value === 0 ? 1 : 0;
      });
  });
};


let image = [[1,1,0],[1,0,1],[0,0,0]]

flipAndInvertImage(image);
