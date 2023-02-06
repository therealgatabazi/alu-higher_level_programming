#!/usr/bin/node

const args = process.argv.slice(2);

const numb = parseInt(args[0]);

if (numb) {
  for (let i = 0; i < numb; i++) {
    console.log('X'.repeat(numb));
  }
} else if (numb < 0) {
  console.log();
} else {
  console.log('Missing size');
}
