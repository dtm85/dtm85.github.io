'use strict';

function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

// document.querySelector('.boom').textContent = '🔥BOOM!🔥';

const firstName = 'Dan';
calcAge(1985);
// console.log(age);
// pringAge();
