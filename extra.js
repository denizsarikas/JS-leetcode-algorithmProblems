/*
input 1 2 2 3 3 4 4 5
output 1 2 3 4 5 6
*/

const s = [1,2,2,3,3,4,4,5]

function processInput(input) {
    const uniqueArray = [...new Set(input)];
    return uniqueArray;
  }

function myWay(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr
}

console.log(processInput(s))
console.log(myWay(s))