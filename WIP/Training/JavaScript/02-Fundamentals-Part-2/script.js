"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive! 🚗");

/////////////////////////////////////////////////
// LEGEND FOR BETTER COMMENTS VSCode Extension //
/////////////////////////////////////////////////

//! Reserved words <-- (//! = This comment is for a Deprecated Method, do not use)
//? Reserved words <-- (//? = This is a comment that asks a Question)
//* Reserved words <-- (//* = This is an Important Comment [HIGHLIGHTED])
//TODO Reserved words <-- (//// = This is a TODO comment)
//// Reserved words<-- (//! = This is a Strikethrough Comment)
// const interface = "Audio";
// const private = "534";
// const if = 23;

function logger() {
  console.log("My name is Dan");
}

//* Calling / Running / Invoking the function
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//* Function decloration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

//* Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age1, age2);

//* Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // retun retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1991, "Dan"));
console.log(yearsUntilRetirement(1980, "Bob"));
*/

function cutFruitPieces(fruit) {
  return fruit * 3;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
