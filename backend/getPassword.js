const bcrypt = require("bcrypt");

let pass = bcrypt.hashSync("asd", 9);
console.log(pass);
