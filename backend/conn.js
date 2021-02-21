const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const session = require("express-session");
const MySQLStore = require("express-mysql-session")(session);
const Router = require("./Router");
const bcrypt = require("bcrypt");
const cors = require("cors");

const saltRounds = 10;

app.use(cors());
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});
db.connect(function (err) {
  if (err) {
    console.log("db_error");
    return false;
  }
});

const sessionStore = new MySQLStore(
  {
    expiration: 1815 * 51516 * 516,
    endConnectionOnclose: false,
  },
  db
);

app.use(
  session({
    key: "864aasdass49d4as6da4da",
    secret: "asd6asda56d2as2d6a6asdas",
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1815 * 51516 * 516,
      httpOnly: false,
    },
  })
);

new Router(app, db);



app.post("/register", (req, res) => {
    const username = req.body.username;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const piradi = req.body.piradi;
    const phone = req.body.phone;
    const password = req.body.password;
  
    bcrypt.hash(password, saltRounds, (err, hash) => {
      db.query(
        "INSERT INTO user (username, lastname,email, piradi, phone, password) VALUES (?,?,?,?,?,?)",
        [username, lastname, email, piradi, phone, hash],
        (err, result) => {
          console.log(err);
        }
      );
    });
  });
  
  app.post("/create", (req, res) => {
    const title = req.body.title;
    const price = req.body.price;
    const bedroom = req.body.bedroom;
    const sartuli = req.body.sartuli;
    const kvadrati = req.body.kvadrati;
    const roomcount = req.body.roomcount;
    const description = req.body.description;
  
    db.query(
      "INSERT INTO employees (price, kvadrati, roomcount, bedroom, sartuli, title, description) VALUES (?,?,?,?,?,?,?)",
      [price, kvadrati, roomcount, bedroom, sartuli, title, description],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  
  app.get("/employees", (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });