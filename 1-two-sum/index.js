/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const res = [];
  for (let i = 0; i < nums.length - 1; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[i] + nums[y] === target) {
        res.push(i, y);
        return res;
      }
    }
  }
};

console.log(twoSum([3, 2, 4], 6));
