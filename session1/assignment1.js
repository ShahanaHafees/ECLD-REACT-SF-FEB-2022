//ASSIGNMENT 1
//Print your name, age, Marital Status by storing them in different variables

let fullName = 'Shahana';
let age = 24;
let martialStatus = 'Single';

console.log('\n');
console.log('Name:', fullName);
console.log('Age:', age);
console.log('Marital Status:', martialStatus);

//ASSIGNMENT 2
//Define 3 variables to store your gender, height (in inches ), non-veg (food preference)
//Print all the three variable types (one per line in the given order)

let gender = "Female";
let height = 61;
let non_veg = "Fried Chicken";

console.log('\n');
console.log('Variable Type of Gender:', typeof(gender));
console.log('Variable Type of Height:', typeof(height));
console.log('Variable Type of Food Preference:', typeof(non_veg));

//ASSIGNMENT 3
//Given the year of birth of a person, calculate his/her age (You can store the current year in a variable)

let yearofBirth = 1998;
let currentYear = 2022;
let currentAge = currentYear - yearofBirth;

console.log('\n');
console.log('Current Age:', currentAge);

//ASSIGNMENT 4
//Given the 3 subjects marks of a particular student calculate the total marks obtained

let subject1 = 98;
let subject2 = 95;
let subject3 = 93;
let totalMark = subject1 + subject2 + subject3;

console.log('\n');
console.log('Total marks obtained by the student:', totalMark);

//ASSIGNMENT 5
//Given the sides of a rectangle print the perimeter and area

let length = 15;
let breadth = 12;

console.log('\n');
console.log('Perimeter:', 2 *(length + breadth));
console.log('Area:', length * breadth);

//ASSIGNMENT 6
//Given a number of total months find the number of months remaining after converting the total months to years

let totalMonths = 27;
let remainingMonths = totalMonths % 12;

console.log('\n');
console.log('Remaining Months:', remainingMonths);

//ASSIGNMENT 7
//Given the Principal Amount, Interest Percentage and Time calculate the simple interest amount

let principalAmount = 25000;
let interestRate = 10;
let timePeriod = 3;
let simpleInterest = (principalAmount * interestRate * timePeriod) / 100 ;

console.log('\n');
console.log('Simple Interest:', simpleInterest);

//ASSIGNMENT 8
//Given the marks of 6 students in a class calculate their average marks

let stud1 = 95;
let stud2 = 80;
let stud3 = 83;
let stud4 = 98;
let stud5 = 90;
let stud6 = 97;
let averageMark = (stud1 + stud2 + stud3 + stud4 + stud5 + stud6 ) / 6;

console.log('\n')
console.log('Average Mark of 6 Student:', averageMark);

//ASSIGNMENT 9
//Given 3 product prices and their quantity calculate the total amount of items in the cart

let productPrice1 = 49;
let quantity1 = 3;
let productPrice2 = 107;
let quantity2 = 5;
let productPrice3 = 90;
let quantity3 = 3;
let totalAmount = ((productPrice1 * quantity1) + 
                   (productPrice2 * quantity2) + 
                   (productPrice3 * quantity3));

console.log('\n');
console.log('Total Aomunt of Items in Cart:', totalAmount);

////ASSIGNMENT 10
//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount

let priceOfProduct1 = 49;
let quantityOfProduct1 = 3;
let discountForProduct1 = 10;
let taxForProduct1 = 12;

let priceOfProduct2 = 107;
let quantityOfProduct2 = 5;
let discountForProduct2 = 12;
let taxForProduct2 = 15;

let tipPercentage = 7;

let totalForProduct1 = priceOfProduct1 * quantityOfProduct1 * [( 100 - discountForProduct1) / 100] * [(100 + taxForProduct1) / 100];
let totalForProduct2 = priceOfProduct1 * quantityOfProduct2 * [( 100 - discountForProduct2) / 100] * [(100 + taxForProduct2) / 100];

let grossTotal = totalForProduct1 + totalForProduct2;
let netTotal = grossTotal * [(100 - tipPercentage ) / 100];

console.log('\n');
console.log('Net Total:', grossTotal);
console.log('Gross Total:', netTotal);

