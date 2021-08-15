/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let filteredNums = [...nums];
  let numOne = filteredNums.shift();
  let numTwo;

  for(let i = 0; i < filteredNums.length; i++) {
    const testNum = filteredNums[i];
    const sum = numOne + testNum;

    if (sum === target) {
      numTwo = testNum;
      break;
    }

    if (i === filteredNums.length - 1) {
      i = -1;
      numOne = filteredNums.shift();
    }
  }

  return [nums.indexOf(numOne), nums.lastIndexOf(numTwo)];

};

console.log( twoSum([2,7,11,15], 9) );

console.log( twoSum([3,2,4], 6) );

console.log( twoSum([3, 3], 6) );

console.log( twoSum([0,4,3,0], 0) );

console.log( twoSum([-3,4,3,90], 0) );

console.log( twoSum([-1,-2,-3,-4,-5], -8));

console.log( twoSum([-10,7,19,15], 9));

