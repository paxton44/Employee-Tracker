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

//make code for prompts; look at activity 13/14 for a good example. 

//make an array for everything to live in until its called upon
const team = [];

//make prompts for each type of employee (Use activity 13 as a ref)
//This makes a selector within an array to let the user pick what they want to do
const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View Current Departments',
        'View Current Employees',
        'View Current Employee Roles',
        'Add a New Department',
        'Add a New Role',
        'Add a New Employee',
        'Change an Employee Role',
        'exit',
      ],
    })
    .then((answer) => {
      switch (data.teamMember) {
        case 'View Current Departments':
          viewCurrentDepartments();
          break;

        case 'View Current Employees':
          viewCurrentEmployees();
          break;

        case 'View Current Employee Roles':
          viewCurrentEmployeeRoles();
          break;

        case 'Add a New Department':
          addANewDepartment();
          break;

        case 'Add a New Role':
          AddANewRole();
          break;

        case 'Add a New Employee':
          addANewEmployee();
          break;

        case 'Change an Employee Role':
          ChangeEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;

        // default:
        //   console.log(`Invalid action: ${answer.action}`);
        //   break;
      }
    });
};

//figure out each prompt now that they are setup similar to activity 13
const artistSearch = () => {
//   inquirer
//     .prompt({
//       name: 'artist',
//       type: 'input',
//       message: 'What artist would you like to search for?',
//     })
//     .then((answer) => {
//       const query = 'SELECT position, song, year FROM top5000 WHERE ?';
//       connection.query(query, {
//         artist: answer.artist
//       }, (err, res) => {
//         if (err) throw err;
//         res.forEach(({
//           position,
//           song,
//           year
//         }) => {
//           console.log(
//             `Position: ${position} || Song: ${song} || Year: ${year}`
//           );
//         });
//         runSearch();
//       });
//     });
};