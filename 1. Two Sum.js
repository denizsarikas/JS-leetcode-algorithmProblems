/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?

*/

var twoSum = function (nums, target) {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return "Not possible";
};

// time complexity: O(N^2) - iki for loop
// space complexity: O(1) - constant

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;

console.log(twoSum(nums1, target1)); // Output: [0, 1]

// const nums2 = [3, 2, 4];
// const target2 = 6;
// console.log(twoSum(nums2, target2)); // Output: [1, 2]

// const nums3 = [3, 3];
// const target3 = 6;
// console.log(twoSum(nums3, target3)); // Output: [0, 1]

// const nums4 = [1, 2];
// const target4 = 6;
// console.log(twoSum(nums4, target4)); // Output: Not possible
