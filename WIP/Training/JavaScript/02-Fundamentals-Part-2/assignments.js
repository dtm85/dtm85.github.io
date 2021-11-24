/*
// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const checkWinner = (avgDolhins, avgKoalas) {

// };

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test Data #1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreDolphins);

const checkWinner = function (avgDolhins, avgKoalas) {
  if (avgDolhins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolhins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolhins})`);
  } else {
    console.log(`No team wins...😕`);
  }
};

checkWinner(576, 111);

// Test Data #2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

// const markMass = 78;
// const markHeight = 1.69;

// const markBMI = markMass / markHeight ** 2;

const markData = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

markData.calcBMI();
console.log(markData.bmi);

// const johnMass = 92;
// const johnHeight = 1.95;

// const johmBMI = johnMass / johnHeight ** 2;

const johnData = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

johnData.calcBMI();
console.log(johnData.bmi);

if (markData.bmi > johnData.bmi) {
  console.log(
    `${markData.firstName} ${markData.lastName}'s BMI (${markData.bmi}) is higher than ${johnData.firstName} ${johnData.lastName}'s BMI (${johnData.bmi})`
  );
} else if (johnData.bmi > markData.bmi) {
  console.log(
    `${johnData.firstName} ${johnData.lastName}'s BMI (${johnData.bmi}) is higher than ${markData.firstName} ${markData.lastName}'s BMI (${markData.bmi})`
  );
}
*/
