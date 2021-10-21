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
*/

const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.76;

console.log((markMass + johnMass / markHeight + johnHeight) ** 2);
