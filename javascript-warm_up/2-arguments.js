#!/usr/bin/node
const value = process.argv.slice(2);

if (value.length == 0) {
  console.log('No argument');
} else if (value.length == 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
