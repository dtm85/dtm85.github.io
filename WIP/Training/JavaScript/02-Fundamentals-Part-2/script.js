"use strict";

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
