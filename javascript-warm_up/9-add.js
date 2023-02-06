#!/usr/bin/node

const args = process.argv.slice(2);

const numb1 = parseInt(args[0]);
const numb2 = parseInt(args[1]);

function add (a, b) {
  const sum = a + b;
  console.log(sum);
}

add(numb1, numb2);
