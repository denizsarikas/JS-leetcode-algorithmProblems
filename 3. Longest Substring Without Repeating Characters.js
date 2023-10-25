/*
3. Longest Substring Without Repeating Characters
Medium
37.2K
1.7K
Companies
Given a string s, find the length of the longest 
substring
 without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

/*
====================================================================================================================
====================================================================================================================
const isUnique = (s) => {
    const set = new Set()
    for (let i = 0; i < s.length; i++) {
        if(set.has(s[i])){
            return false
        }
        set.add(s[i])
    }
    return true
}

var lengthOfLongestSubstring = function(s) {
    let max = 0;
    for(let begin = 0; begin < s.length(); begin++){
        for(let end = begin; end < s.length; end++){
            const substring = s.substring(begin, end + 1)
            if(isUnique(substring)){
                max = Math.max(max, substring.length)
            }
        }
    }
    return max;
};
====================================================================================================================
====================================================================================================================
*/

/*
====================================================================================================================
====================================================================================================================
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let begin = 0;
  let map = {};
  for (let end = 0; end < s.length; end++) {
    if (map[s[end] !== undefined && map[s[end]] >= begin]) {
      begin = map[s[end]] + 1;
    }
    map[s[end]] = end;
    max = Math.max(max, end - begin + 1);
  }
  return max;
};
====================================================================================================================
====================================================================================================================
*/

var lengthOfLongestSubstring = function (s) {
    let maxLength = 0; // En uzun alt dize uzunluğunu saklamak için değişken
    let startIndex = 0; // Alt dizenin başlangıç indeksi
    let charMap = {}; // Dizedeki karakterleri ve indekslerini saklamak için bir harita

    for (let endIndex = 0; endIndex < s.length; endIndex++) {
        const currentChar = s[endIndex];

        // Eğer karakter daha önce gördüysek ve bu karakteri mevcut alt dizinin içinde değilse
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= startIndex) {
            // Alt dizeyi başka bir tekrarlamayan karakterin sonuna kadar kısalt
            startIndex = charMap[currentChar] + 1;
        }

        // Karakterin indeksini güncelle
        charMap[currentChar] = endIndex;

        // Mevcut alt dizenin uzunluğunu hesapla ve en büyük uzunluğu sakla
        const currentLength = endIndex - startIndex + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3
