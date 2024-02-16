// 05-if-and-switch-statements

const size = 25;
let result;

if (size > 10 && size <= 20) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Hooray!";
}

console.log(result);
/*  Returns Greater than 10 but should return Greater than 20


// TODO: Implement the oddEven function */

function oddEven(noomber) {
  if (noomber % 2 === 0) {
    return "even";
  }
  return "odd";
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
/* result should be even



// TODO: Implement the oldYoung function */

function oldYoung(noomber) {
  if (noomber < 16 && noomber > 0 && noomber < 49) {
    return "Children";
  } else if (noomber < 50 && noomber > 0) {
    return "Young person";
  } else if (noomber > 50) {
    return "Elder Person";
  } else if (noomber < 0 || "string") {
    return "Invalid parameter";
  }
}

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
