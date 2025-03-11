/*
9. Palindrome Number
Easy
11.1K
2.6K
Companies
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

An integer is a palindrome when it reads the same forward and backward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
 

Follow up: Could you solve it without converting the integer to a string?
*/

function isPalindrome(x) {
    // Sayıyı bir string olarak çevir
    const str = x.toString();
    console.log("string hali: " + str);
    // stringi ters çevir
    const reversedStr = str.split('').reverse().join('');
    console.log("ters hali: " + reversedStr);
    // Ters çevrilmiş string ile orijinal dizeyi karşılaştır
    if(str === reversedStr){
        return true;
    }else{
        return false;
    }
}

var isPalindrome2 = function (x) {
    if (x > -1) {
      if (x.toString().split("").reverse().join("") === x.toString()) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  };

// Testler
console.log(isPalindrome(121)); // Çıktı: true
console.log(isPalindrome(-121)); // Çıktı: false
console.log(isPalindrome(10)); // Çıktı: false
