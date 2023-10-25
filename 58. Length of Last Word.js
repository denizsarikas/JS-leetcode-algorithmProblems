/*
58. Length of Last Word
Easy
4.2K
206
Companies
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

function lengthOfLastWord(s) {
    const words = s.split(" ").filter(word => word !== "");
    if (words.length > 0) {
        return words[words.length - 1].length;
    } else {
        return 0;
    }
}

const s1 = "Hello World";
const s2 = "   fly me   to   the moon  ";
const s3 = "luffy is still joyboy";

console.log(lengthOfLastWord(s1));  // Çıktı: 5
console.log(lengthOfLastWord(s2));  // Çıktı: 4
console.log(lengthOfLastWord(s3));  // Çıktı: 6

