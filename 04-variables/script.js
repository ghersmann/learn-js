// 04-variables

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length;
}

console.log(getUserNameLength(userName) > 4);
/*  ^______________ Should log true



TODO: Implement the isString function */

const isString = function (insertAnything) {
  return typeof insertAnything === "string";
  /*   if (typeof insertAnything === "string") {
    return true;
  }
  return false; */
};

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
