/*
14. Longest Common Prefix
Easy
15.9K
4.2K
Companies
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs) {
    if (strs.length === 0) {
        return ""; // Return an empty string if the input array is empty.
    }
    
    // Iterate through the characters of the first string.
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        
        // Check if the character is common in all strings.
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i); // Return the common prefix found so far.
            }
        }
    }
    
    return strs[0]; // If no mismatch is found, the first string is the common prefix.
}

// Test cases
const strs1 = ["flower", "flow", "flight"];
console.log("Output: " + longestCommonPrefix(strs1)); // Output: "fl"

const strs2 = ["dog", "racecar", "car"];
console.log("Output: " +longestCommonPrefix(strs2)); // Output: ""

//extra
function longestRepeatedString(strs) {
    if (strs.length === 0) {
      return "";
    }

  
    const lengths = strs.map((str) => str.length);
    const minLength = Math.min(...lengths);
    let maxSubstring = "";
  
    for (let i = 0; i < minLength; i++) {
      for (let j = i + 1; j <= minLength; j++) {
        const substring = strs[0].substring(i, j);
  
        if (strs.every((str) => str.includes(substring))) {
          if (substring.length > maxSubstring.length) {
            maxSubstring = substring;
          }
        }
      }
    }
  
    return maxSubstring;
  }
  
  const strs3 = ["ahmet", "mehmet", "namet"];
  console.log("Output: " + longestRepeatedString(strs3)); // Output: "met"