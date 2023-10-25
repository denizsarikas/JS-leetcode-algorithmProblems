/*
67. Add Binary
Easy
8.8K
884
Companies
Given two binary strings a and b, return their sum as a binary string.

 

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 

Constraints:

1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.

*/

//yine bigInt kullanmak zorunda kaldım yuksek girdiler yuzunden
var addBinaryFirst = function(a, b) {

    let integerA = parseInt(a,2)
    let integerB = parseInt(b,2)
    let sum = integerA + integerB
    let result = sum.toString(2);
    return result;
};

var addBinary = function(a, b) {
    let integerA = BigInt('0b' + a);
    let integerB = BigInt('0b' + b);
    let sum = integerA + integerB;
    return sum.toString(2);
};

// Example usage:
const a = "11";
const b = "1";
const c = "100";
const sum = addBinary(a, b);
console.log(sum);  // Output: "100"