#!/usr/bin/node

const firstArg = process.argv.slice(2);

if (firstArg === undefined) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < parseInt(firstArg); i++) {
    console.log('C is fun');
  }
}
