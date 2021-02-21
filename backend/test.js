const fs = require("fs");
const path = require("path");

const mkdirp = require("mkdirp");

// return value is the first directory created
const made = mkdirp.sync(`${__dirname}/tmp/foo/bar/baz`);
console.log(`made directories, starting with ${made}`);

const dir = `${__dirname}/database/temp`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, {
    recursive: true,
  });
}
