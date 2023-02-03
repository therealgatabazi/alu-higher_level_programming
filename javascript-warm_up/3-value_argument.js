#!/usr/bin/node
const [value] = process.argv.slice(2);
if (!value) {
    console.log('No argument');
}
else {
    console.log(value);
}