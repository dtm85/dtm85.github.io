"use strict";

// PROBLEM:
// We work for a company building a smart home thermometer. Our most recent task is this:
// "Given an array of temperatures of one day, calculate the temperature amplitude."
// -- Keep in mind that somtimes there might be a sensor error --

const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

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

// const calcTempAmplitude = function(temps) {

// };
