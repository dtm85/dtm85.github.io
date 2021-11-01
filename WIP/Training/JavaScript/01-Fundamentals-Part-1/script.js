/* 
let js = "amazing";
console.log(40 + 8 + 23 - 10);

let firstName = "Dan";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 7);
// console.log(typeof "Dan");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1998;
// const job;

var job = "programmer";
job = "teacher";

// Math operators
const now = 2037;
const ageDan = now - 1991;
const ageSarah = now - 2018;
console.log(ageDan, ageSarah);

console.log(ageDan * 2, ageDan / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Dan";
const lastName = "Dumitru";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25<-- Basically reassigning the let x value
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100 (because JavaScript is read from the top down)
x--; // x = x - 1 = 99 (because JavaScript is read from the top down)
console.log(x);

// Comparison operators (We use comparison operator to produce boolean values)
console.log(ageDan > ageSarah); // In the Chrome console the boolean value is true. We can use the following: [ >, <, >=, <= ] <-- the line under the bottomw of the greater than or less than arrows (for example: <=, >= is an = sign. It only looks this way because of the font I am using in VSCode.)

console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageDan = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x= y = 10, x = 10
console.log(x, y);

const averageAge = (ageDan + ageSarah) / 2;
console.log(ageDan, ageSarah, averageAge);

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
console.log(markBMI);

const johmBMI = johnMass / johnHeight ** 2;
console.log(johmBMI);

const markHigherBMI = markBMI > johmBMI;
console.log(markHigherBMI);

const firstName = "Dan";
const job = "Full Stack Developer";
const birthYear = 1985;
const year = 2021;

const dan =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(dan);

const danNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(danNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
with
multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1998;
let century = 20;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 18);

console.log(Number("Dan"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; // Gives us "11" because the "1" is a string and the + operator converts the 1 to a string also.
n = n - 1;
console.log(n);

// 5 falsy values: 0, " ", undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Dan"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = "0";
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}

const age = "18";
if (age === 18) console.log("You just became and adult! (STRICT)");

if (age == 18) console.log("You just became and adult! (LOOSE)");

const favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 7) {
  console.log("Cool! 7 is a very lucky number!");
} else if (favorite === 8) {
  console.log("8 is also a lucky number!");
} else if (favorite === 9) {
  console.log("9 is also a kind of lucky number!");
} else {
  console.log("Number is not 7, 8 or 9");
}

if (favorite !== 7) console.log("Why not 7?");
*/
