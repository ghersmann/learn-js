// 07-arrays

// 01) removeItem function

function removeItem(ainmals, index) {
  if (index < 1) {
    return "Index is out of range";
  }
  let copyArr = ainmals.toSpliced(index - 1, 1);
  return copyArr.toString();
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals.toString());
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits.toString());
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// sumOfCharacters function

function sumOfCharacters(arr) {
  let totalSum = 0;
  for (let noom = 0; noom < arr.length; noom++) {
    if (typeof arr[noom] === "string") {
      totalSum += arr[noom].length;
    }
  }
  return totalSum;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
