#!/usr/bin/node

const fs = require('fs');

const file = process.argv[2];

fs.readFile(file, function (err, data) {
  if (err) console.log(err);
  const content = data;
  console.log(content.toString());
});
