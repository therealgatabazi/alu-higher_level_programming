#!/usr/bin/node

const arg = process.argv[2];
const Numbcheck = Number.isInteger(arg);

if (!Numbcheck === true) {
  console.log(`My number: ${arg}`);
}

if (!Numbcheck === false) {
  console.log('Not a number');
}
