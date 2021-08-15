/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let leastValue = nums.shift();

  nums.forEach(function(num) {
    if (num < leastValue) {
      leastValue = num;
    }
  });

  return leastValue;
};

let test = [3,4,5,1,2];

console.log( findMin(test) );
