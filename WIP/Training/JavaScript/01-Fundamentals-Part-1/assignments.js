/*
let country = "United State";
let continent = "North America";
let population = "333,521,903";

console.log(country);
console.log(continent);
console.log(population);

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;

const johmBMI = johnMass / johnHeight ** 2;

if (markBMI >= johmBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johmBMI})`);
} else {
  console.log(`John's BMI (${johmBMI}) is higher than Mark's BMI (${markBMI})`);
}
*/

// Average Score (Dolphins)
const averageScoreDolphins = (96 + 108 + 89) / 2;
// console.log(averageScoreDolphins);

// Average Score (Koalas)
const averageScoreKoalas = (88 + 91 + 110) / 2;
// console.log(averageScoreKoalas);

// Dolphins
const winDolphins = averageScoreDolphins > averageScoreKoalas;

// Koalas
const winKoalas = console.log("Koalas Win!");

if (averageScoreDolphins > averageScoreKoalas) {
  console.log("Dolphins Win!");
} else {
  console.log("Koalas Win!");
}
if (averageScoreDolphins === averageScoreKoalas) {
  console.log("Its a tie!");
}

// const greaterThan100 = (
//   if (averageScoreDolphins && averageScoreKoalas >= 100)
//   console.log()
// )
