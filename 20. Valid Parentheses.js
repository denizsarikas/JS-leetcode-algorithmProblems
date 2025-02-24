/*
20. Valid Parentheses
Easy
22.2K
1.5K
Companies
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

var isValid = function (s) {
  s = s.split("");

  var stack = [];

  for (var i = 0; i < s.length; i++) {
    var z = s[i];

    if (z === "(" || z === "{" || z === "[") {
      stack.push(z);
    } else {
      if (stack.length === 0) {
        return false;
      }
      var top = stack[stack.length - 1];

      if (
        (z === ")" && top === "(") ||
        (z === "]" && top === "[") ||
        (z === "}" && top === "{")
      ) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
};

const test1 = "()";
console.log(isValid(test1)); //output: true

const test2 = "()[]{}";
console.log(isValid(test2)); //output: true

const test3 = "(]";
console.log(isValid(test3)); //output: false

const test4 = "(){)[}";
console.log(isValid(test4)); //output: false
