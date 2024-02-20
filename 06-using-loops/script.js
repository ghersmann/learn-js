// 06-using-loops

function oddNumbers(noomA, noomB) {
  let oddArray = [];
  noomA = Math.abs(noomA);
  noomB = Math.abs(noomB);

  for (let firstnoom = noomA; firstnoom <= noomB; firstnoom++) {
    if (firstnoom % 2 !== 0) {
      oddArray.push(" " + firstnoom);
    }
  }
  return oddArray.toString();
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// TODO: Implement the charCount function

function charCount(word, letter) {
  let foundAmount = 0;

  for (let index = 0; index <= word.length; index++) {
    if (word.charAt(index) === letter) {
      foundAmount++;
    }
  }

  return foundAmount.toString();
}

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3
