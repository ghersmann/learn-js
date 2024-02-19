// 03-your-first-functions

// TODO: implement welcomeMsg function

function welcomeMsg(userName) {
  return "Welcome" + userName;
}

console.log(welcomeMsg(" Jan!"));
// Welcome Jane!

console.log(welcomeMsg(" Ove!"));
/* // Welcome Marc!



// TODO: implement calcGrossPrice function */

function calcGrossPrice(price, tax) {
  return price * tax + price;
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

console.log(calcGrossPrice(40, 0.16));
/* // result should be 46.4



// TODO: Implement the addPositive function */

function addPositive(a, b) {
  if (a < 0) {
    a = a * -1;
  }
  if (b < 0) {
    b = b * -1;
  }
  return a + b;
}

console.log(addPositive(-3, 3));

console.log(addPositive(2, 3));
// result1 should be 5

console.log(addPositive(3, -5));
// result2 should be 8

console.log(addPositive(-1, -8));
// result2 should be 9
