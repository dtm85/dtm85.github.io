'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude."
// -- Keep in mind that somtimes there might be a sensor error --

// const temps = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem

// - What is temp amplitude?
// Answer: The difference between the highest and lowest temp.

// - How to compute the max and min temperatures?

// - What's a sensor error? And what to do when one occurs?

// 2) Breaking up the problem into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temps);
// console.log(amplitude);

// HOW the LOOP works in in this problem

// max = 3 (first element of the array)
// max = 7 (next iteration of the loop)
// max = 4 (next iteration, 4 is smaller so it moves on the the next one)
// max = 23 (last element of the array was 23 which is in fact the highest. So this is the new max)

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, shoule we impliment the same functionality twice?
// NO! Just merge 2 arrays.

// 2) Breaking up the problem into sub-problems.
// -  How to merge 2 arrays?

// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = temps[0];
//   let min = temps[0];

//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];
//     if (typeof currentTemp !== 'number') continue;

//     if (currentTemp > max) max = currentTemp;
//     if (currentTemp < min) min = currentTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitude);

// const temps1 = [17, 21, 23];
// const temps2 = [12, 5, -5, 0, 4];

// PROBLEM 1:
// Create a function 'printForecast' which takes in an array 'arr' and logs a string: i.e. - "...17ºC in 1 days...21ºC in 2 days...23ºC in 3 das..."

// 1) Understanding the problem
// - Array transformed to string, seperted by ...

// - What is the X days?
// ANSWER: index +1

// 2) Breaking up the problem into sub-problems.
// - Transform array into a string
// - Transform each element to string with ºC
// - String needs to contain day (index +1)
// - Add ... between elements and start and end of string
// Log string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`...${data2[0]}ºC...${data2[1]}ºC...${data2[2]}ºC`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };

// printForecast(data2);
