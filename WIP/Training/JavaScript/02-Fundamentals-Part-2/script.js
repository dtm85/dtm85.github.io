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

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired! 🎉`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1991, "Dan"));
console.log(yearsUntilRetirement(1950, "Mike"));


const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "Teacher", friends];
console.log(jonas);
console.log(jonas.length);

//* Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

const friends = ["Michael", "Steven", "Peter"];

// Adds Elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Removes Elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log(`You have a friend called Steven`);
}

const danArray = [
  "Dan",
  "Dumitru",
  "2037 - 1991",
  "Web Dev",
  ["Michael", "Peter", "Steven"],
];

const dan = {
  firstName: "Dan",
  lastName: "Dumitru",
  age: 2037 - 1991,
  job: "Web Developer",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(dan);

console.log(dan.lastName);
console.log(dan["lastName"]);

const nameKey = "Name";
console.log(dan["first" + nameKey]);
console.log(dan["last" + nameKey]);

// console.log(dan."last" + nameKey)

const interesteIN = prompt(
  "What do you want to know about Dan? Choose between firstName, lastName, age, job and friends"
);

console.log(dan[interesteIN]);

if (dan[interesteIN]) {
  console.log(dan[interesteIN]);
} else {
  console.log(`This value doesn't exist, try again!`);
}

dan.location = "Salem, OR";
dan["twitter"] = "@DanTechMedia";
console.log(dan);

// Challenge
// "Dan has 3 friends, and his best friend is called Michael"
console.log(
  `${dan.firstName} has ${dan.friends.length}, and his best friend is called ${dan.friends[0]}`
);

const dan = {
  firstName: "Dan",
  lastName: "Dumitru",
  birthYear: 1991,
  job: "Web Developer",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear;
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return console.log(
      `${this.firstName} ${
        this.lastName
      } is ${this.calcAge()} and is a successful ${this.job} with ${
        this.friends.length
      } friends - ${this.friends[0]}, ${this.friends[1]} and ${
        this.friends[2]
      }. He also has ${this.hasDriversLicense ? "a" : "no"} driver's license!`
    );
  },
};

console.log(dan.calcAge());

console.log(dan.age);
console.log(dan.age);
console.log(dan.age);

console.log(dan.getSummary());

// console.log("lifting weights repetition 1 🏋️‍♀️");
// console.log("lifting weights repetition 2 🏋️‍♀️");
// console.log("lifting weights repetition 3 🏋️‍♀️");
// console.log("lifting weights repetition 4 🏋️‍♀️");
// console.log("lifting weights repetition 5 🏋️‍♀️");
// console.log("lifting weights repetition 6 🏋️‍♀️");
// console.log("lifting weights repetition 7 🏋️‍♀️");
// console.log("lifting weights repetition 8 🏋️‍♀️");
// console.log("lifting weights repetition 9 🏋️‍♀️");
// console.log("lifting weights repetition 10 🏋️‍♀️");

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`lifting weights repetition ${rep} 🏋️‍♀️`);
}

const danArray = [
  "Dan",
  "Dumitru",
  2037 - 1991,
  "Web Dev",
  ["Michael", "Peter", "Steven"],
  true,
];

const types = [];

for (let i = 0; i < danArray.length; i++) {
  // Reading from danArray
  console.log(danArray[i], typeof danArray[i]);

  // // Filling types array
  // types[i] = typeof danArray[i];
  types.push(typeof danArray[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < danArray.length; i++) {
  if (typeof danArray[i] !== "string") continue;

  console.log(danArray[i], typeof danArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < danArray.length; i++) {
  if (typeof danArray[i] === "number") break;

  console.log(danArray[i], typeof danArray[i]);
}

const danArray = [
  "Dan",
  "Dumitru",
  2037 - 1991,
  "Web Dev",
  ["Michael", "Peter", "Steven"],
  true,
];

// 0, 1, ..., 4
// 4, 3, 2, 1, 0

for (let i = danArray.length - 1; i >= 0; i--) {
  console.log(i, danArray[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
  console.log(`-------- Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting Weight Repetion ${rep} 🏋️‍♀️`);
  }
}


// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting Weights Repetition ${rep} 🏋️‍♀️`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting Weights Repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}
*/
