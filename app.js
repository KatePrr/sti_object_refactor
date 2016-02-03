// Change the employee arrays into Employee Objects
// Make employee constructor function
// Change all array references to use Object properties
// GitHub : sti_object_refactor


// // Employee Object constructor
function Employee(name, employeeId, salary, rating) {
	this.name = name;
	this.employeeId = employeeId;
	this.salary = salary;
	this.rating = rating;
}

// New Employee Object Instances
var atticus = new Employee("Atticus", "2405", "47000", 3);
var jem = new Employee("Jem", "62347", "63500", 4);
var boo = new Employee("Boo", "11435", "54000", 3);
var scout = new Employee("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];
//console.log(employees);


function calculateSTI(empInfo) {
	var name = empInfo.name;
	var empNumber = empInfo.employeeId;
	var currentSalary = Math.round(parseFloat(empInfo.salary));
	var rating = empInfo.rating;
	
	var processedEmployee = [];
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = currentSalary;	// base + STI
	var totalBonus = bonus;

	// calc sti
	switch(rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(empNumber, bonusPercentage, currentSalary);
	
	// build processed array
	processedEmployee[0] = name;
	processedEmployee[1] = bonusPercentage;

	bonus = Math.round(bonusPercentage * currentSalary);
	adjSalary = currentSalary + bonus;

	processedEmployee[2] = adjSalary;
	processedEmployee[3] = bonus;

	return processedEmployee;
}

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(empNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(currentSalary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}


for(var i = 0; i < employees.length; i++) {
	console.log(calculateSTI(employees[i]));

}