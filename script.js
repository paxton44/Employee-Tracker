const mysql = require('mysql');
const inquirer = require('inquirer');
//console table allows us to look at a table of our employee tracker visually instead of just lines of code. 
const consoleTable = require('console.table')

//SQL db connection
const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'root',
  database: 'employees',
});

//figure out how to connect this to sql 
connection.connect((err) => {
  if (err) throw err;
  start();
});



