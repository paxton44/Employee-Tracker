-- Creates Department Seeds. 
INSERT INTO department (department_name)
VALUES ("IT"), ("Marketing & Sales"), ("Finance"), ("Operations");

-- Creates Employee Role Seeds. 
INSERT INTO EmployeeRole (role_title, role_salary, department_id)
VALUES ("IT Manager", $100000, 1), ("Marketing & Sales Director", $85000, 2), ("Finance Intern", $20000, 3), ("Operations Manager", $60000, 4);

-- Creates Employee Name Seeds. 
INSERT INTO EmployeeName (first_name,last_name,role_title,role_salary,role_id,manager_id)
VALUES ("Jimi", "Hendrix","Operations Manager", $60000, 4), ("Dave", "Mustane","Marketing & Sales Director", $85000, 2 )("Mick", "Jagger", "Finance Intern", $20000, 3), ("Trent", "Reznor", "IT Manager", $100000, 1);

-- Drive The Seeds
Select * FROM department;
Select * FROM EmployeeRole;
Select * FROM EmployeeName;



