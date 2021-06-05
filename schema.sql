DROP DATABASE IF EXISTS employees;

CREATE DATABASE employees;

USE employees;

CREATE TABLE Department(
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL
);


CREATE TABLE EmployeeRole(
  id INT AUTO_INCREMENT PRIMARY KEY,
  role_title VARCHAR(100) NOT NULL,
  role_salary INT default 0,
  department_id INT, 
  FOREIGN KEY (department_id) REFERENCES Department(id)
  ); 


CREATE TABLE EmployeeName(
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  role_id INT NOT NULL, 
  manager_id: INT,
  PRIMARY KEY(id)
  FOREIGN KEY (role_id) REFERENCES EmployeeRole(id), 
  manager_id INT DEFAULT NULL,
  );