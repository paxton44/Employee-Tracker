const mysql = require('mysql');
const inquirer = require('inquirer');
const { response } = require('express');
//console table allo)ws us to look at a table of our employee tracker visually instead of just lines of code. 
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
  start();
});

//make code for prompts; look at activity 13/14 for a good example. 
//make prompts for each type of employee (Use activity 13 as a ref)
//This makes a selector within an array to let the user pick what they want to do
// then the switch lets the selected option drive the appropriate routes based on user selection
const start = () => {
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
    .then((response) => {
      switch (response.userSelection) {
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

        // case 'Exit':
        //   connection.end();
        //   break;

        default:
          connection.end();
          console.log(`Invalid action: ${response.action}`);
          break;
      }
    });
};


// View Current Departments

const viewCurrentDepartments = () => {
connection.query('SELECT * FROM department', (err, res) => {
if (err) throw err;
//use console table to view entries from the db 
console.table(res);
start()
})


};


// View Current Employee Roles

const viewCurrentEmployeeRoles = () => {
  connection.query('SELECT * FROM EmployeeRole', (err, res) => {
  if (err) throw err;
  //use console table to view entries from the db 
  console.table(res);
  start()
  })
  
  
  };


// View Current Employees

const viewCurrentEmployees = () => {
  connection.query('SELECT * FROM EmployeeName', (err, res) => {
  if (err) throw err;
  //use console table to view entries from the db 
  console.table(res);
  start()
  })
  
  
  };



// Add New Department 

const addANewDepartment = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'addANewDepartment',
      message: 'What is the Name of the New Department?',
    }
  ])
      .then((response) => {
        console.log(response.addANewDepartment);
        connection.query('INSERT INTO department SET?',
            {
              department_name: response.addANewDepartment,
            },
                (err, res) => {
                  if(err) throw err;
                  start();
                }     
        )
      })
};


// Add New Role

const AddANewRole = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'role_title',
      message: 'What is the Name of the New Role?',
    },
    {
      type: 'input',
      name: 'role_salary',
      message: 'What is the Salary of the New Role?',
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'What is the Department ID of the New Role?',
    },
  ])
      .then((response) => {
        console.log(response);
        connection.query('INSERT INTO EmployeeRole SET?',
            {
              role_title: response.role_title,
              role_salary: response.role_salary,
              department_id: response.department_id,
            },
                (err, res) => {
                  if(err) throw err;
                  start();
                }     
        )
      })
};


// Add New Employee

const addANewEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'first_name',
      message: 'What is the First Name of the New Employee?',
    },
    {
      type: 'input',
      name: 'last_name',
      message: 'What is the Last Name of the New Employee?',
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'What is the role id of the New Employee?',
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'What is the manager id of the New Employee?',
    },
  ])
      .then((response) => {
        console.log(response);
        connection.query('INSERT INTO EmployeeName SET?',
            {
              first_name: response.first_name,
              last_name: response.last_name,
              role_id: response.role_id,
              manager_id: response.manager_id,
            },
                (err, res) => {
                  if(err) throw err;
                  start();
                }     
        )
      })
};
