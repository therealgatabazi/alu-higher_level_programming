#!/usr/bin/node

const factorial = parseInt(process.argv.slice(2)[0]);

if (isNaN(factorial) === true) {
  console.log(1);
} else {
  const result = Factorial(factorial);
  console.log(result);
}

function Factorial (num) {
  if (num === 1) {
    return 1;
  } else {
    return (num * Factorial(num - 1));
  }
}
