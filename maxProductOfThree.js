/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let sum = 1;

  nums = nums.sort( (a,b) => {
    return a < b;
  });

  return sum;
};

console.log( maximumProduct( [-4,-3,-2,-1,60] ));
