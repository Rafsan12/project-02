// Problem-1
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(25));

// Problem-2

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(7));

// problem-3

function sum(a, b) {
  return a + b;
}

console.log(sum(3, 4));
console.log(sum(10, 20));

// Problem-4

function findSmallestNum(arr) {
  return Math.min(...arr);
}

console.log(findSmallestNum([3, 5, 1, 9]));
console.log(findSmallestNum([-1, -5, 0, 10]));

// Problem-5

function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello world"));
console.log(countVowels("Javascript"));

// Problem-6

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));

// Problem-7

function isArrayEmpty(arr) {
  return arr.length === 0;
}

console.log(isArrayEmpty([]));
console.log(isArrayEmpty([1, 2, 3]));

// Problem-9

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("world"));

// Problem-10

function toLowerCase(str) {
  return str.toLowerCase();
}

console.log(toLowerCase("HELLO WORLD"));
console.log(toLowerCase("JavaScript"));

// Problem-11

function stringLength(str) {
  return str.length;
}

console.log(stringLength("hello"));
console.log(stringLength("world"));

// Problem-12

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(["a", "b"], ["c", "d"]));

// Problem-13

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3]));
console.log(getLastElement(["a", "b", "c"]));

// Problem-14

function getFirstCharacter(str) {
  return str[0];
}

console.log(getFirstCharacter("hello"));
console.log(getFirstCharacter("world"));

// Problem-15

function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([-1, -2, -3, -4]));
console.log(sumArray([1.5, 2.5, 3.5]));
