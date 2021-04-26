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
  console.log(`connected as id ${connection.threadId}`);
  // why does commenting out start allow the server to connect??
  // start();
});

//make code for prompts; look at activity 13/14 for a good example. 
//make prompts for each type of employee (Use activity 13 as a ref)
//This makes a selector within an array to let the user pick what they want to do
// then the switch lets the selected option drive the appropriate routes based on user selection
const runSearch = () => {
  inquirer
    .prompt({
      name: 'userSelection',
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
      switch (answer.userSelection) {
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

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

// //figure out each prompt now that they are setup similar to activity 13
// const viewCurrentDepartments = () => {
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
// };