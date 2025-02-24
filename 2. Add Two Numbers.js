/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/

/*
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// İki Bağlı Listeyi Toplama Fonksiyonu
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let p = l1, q = l2, current = dummyHead;
    let carry = 0;

    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;

        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
}

*/

function addTwoNumbers(arr1, arr2) {
  const string1 = arr1.join(""); // Giren diziyi bir stringe çevir [1,2,3] => "123"
  console.log("sting1 -->", string1);
  const string2 = arr2.join("");
  const reversedString1 = string1.split("").reverse().join(""); // Stringi ters çevir "123" => "321"
  console.log("sting1 -->", string1);
  const reversedString2 = string2.split("").reverse().join("");
  const number1 = parseInt(reversedString1, 10); // Ters çevrilmiş stringi sayıya çevir
  const number2 = parseInt(reversedString2, 10);
  const numSum = number1 + number2; // Sayıları topladık
  const stringSum = numSum.toString(); // Toplamı stringe çevir
  const reversedSum = stringSum.split("").reverse().join(""); // Stringe çevrilmiş değerleri diziye aktar
  const arrSum = reversedSum.split("").map(Number); // Her öğeyi tam sayıya dönüştür
  return arrSum;
}

function addTwoNumbers2(arr1) {
  console.log("arr1 -->", arr1);
  console.log("TEST LOG -->", arr1.reverse('').join(''));
  return;
}

const test1_l1 = [2, 4, 3];
const test1_l2 = [5, 6, 4];
console.log(addTwoNumbers(test1_l1, test1_l2)); // Output: [ 7, 0, 8 ]

addTwoNumbers2(test1_l1);

const test2_l1 = [0];
const test2_l2 = [0];
console.log(addTwoNumbers(test2_l1, test2_l2)); // Output: [ 0 ]

const test3_l1 = [9, 9, 9, 9, 9, 9, 9];
const test3_l2 = [9, 9, 9, 9];
console.log(addTwoNumbers(test3_l1, test3_l2)); // Output: [8, 9, 9, 9, 0, 0, 0, 1 ]
