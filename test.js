// let twoSumTest = [1, 1, 2];
// let twoSumTarget = 2;

// let twoSumFunc = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       } else {
//         return "No two sum solution";
//       }
//     }
//   }
// };

// console.log(twoSumFunc(twoSumTest, twoSumTarget));

// let palindromeTest = 121;

// let palindromeFunc = function (x) {
//   let reverseNum = x.toString().split("").reverse().join("");
//   if (x.toString() === reverseNum) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindromeFunc(palindromeTest));

// function linkedListToArray(head) {
//   const result = [];
//   let current = head;
//   while (current !== null) {
//     result.push(current.value);
//     current = current.next;
//   }
//   return result;
// }

// function arrayToLinkedList(arr) {
//   if (arr.length === 0) return null;
//   const head = new ListNode(arr[0]);
//   let current = head;
//   for (let i = 1; i < arr.length; i++) {
//     current.next = new ListNode(arr[i]);
//     current = current.next;
//   }
//   return head;
// }

// var isValid = function(s) {
//   s = s.split("");

//   var stack = [];

//   for (var i = 0; i < s.length; i++) {
//     var z = s[i];

//     if (z === "(" || z === "{" || z === "[") {
//       stack.push(z);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }
//       var top = stack[stack.length - 1];

//       if ((z === ")" && top === "(") || (z === "]" && top === "[") || (z === "}" && top === "{")) {
//         stack.pop();
//       } else {
//         return false;
//       }
//     }
//   }

//   console.log("Tüm karakterler işlendi. Son stack durumu:", stack);
//   var valid = stack.length === 0;
//   console.log("Dönen sonuç:", valid, " (Stack boşsa geçerli olur.)");
//   return valid;
// };

//  Örnek kullanımlar:
//  console.log("Test 1 (\"()[]{}\"): ", isValid("()[]{}"));  // true
// console.log("Test 3 (\"([{}])\"): ", isValid("([{}])"));      // true
//  console.log("Test 4 (\"(){)[}\"): ", isValid("(){)[}"));    // false

// const nums = [1,1,2];

// var removeDuplicates = function (nums) {
//   let stack = [];
//   let deletedCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (stack.indexOf(nums[i]) === -1) {
//       stack.push(nums[i]);
//     } else {
//       deletedCount++;
//     }
//   }

//   console.log("Stack:", stack);
//   let sortedArr = stack.sort((a, b) => a - b);
//   console.log("Sorted Array:", sortedArr);

//   finalArr = nums;

//   return stack;
// };

// console.log(removeDuplicates(nums));

// const nums = [0,1,2,2,3,0,4,2];
// const target = 2;

// var removeElement = function(nums, val) {
//   var zeroStartIdx = 0;
//   for(let i=0;i<nums.length;i++){
//       if(nums[i]!==val){
//           nums[zeroStartIdx]=nums[i];
//           zeroStartIdx++
//       }
//   }
//   return zeroStartIdx;
// };

// console.log(removeElement(nums, target));

// var removeDuplicates = function (nums) {
//   var zeroStartIdx = 0;
//   for (let i = 1; i <= nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[zeroStartIdx+1] = nums[i];
//       zeroStartIdx++;
//     }
//   }
//   return zeroStartIdx;
// };

// const nums = [1, 3, 5, 6];
// const target = 5;

// var searchInsert = function (nums, target) {
//   for (let i = 0; i < nums.length(); i++) {
//       if (target < nums[i]) {
//           min = nums[i]
//       } else {
//           if (target === nums[i]) {
//               return i
//           } else {
//               return i
//           }
//       }
//   }
// };

// console.log(searchInsert(nums, target));

// const digits = [9];

// const number = 123;

// var plusOne = function (digits) {
//   let s = digits.join("");
//   let n = Number(s) + 1;
//   let stringArr = n.toString().split("");
//   let numberArray = stringArr.map((str) => parseInt(str));
//   return stringArr;
// };

// console.log(plusOne(digits));

// const num1 = [1, 2, 3];
// const num2 = [2, 5, 6];
// const target = 3;
// var twoSum = function (num1, num2, target) {
//   for (let i = 0; i < num1.length; i++) {
//     for (let j = 0; j < num2.length; j++) {
//       if (num1[i] + num2[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return "Not possible";
// };
