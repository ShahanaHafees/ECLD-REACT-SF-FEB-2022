//ASSIGNMENT 1
//Define a variable count Print your name using while loop the no of times the value assigned to the variable count

let count = 0;
let uname = "Shahana";
while(count < 5)
{
    console.log(uname);
    count++;
}

//ASSIGNMENT 2
//Define a variable limit Print your name using for loop the no of times the value assigned to the variable limit

let limit = 3;
let uName = "SHAN";

console.log('\n');
for(limit = 0; limit <3; limit++)
{
    console.log(uName);
}

//ASSIGNMENT 3
//Using a while loop print the numbers in descending order from the given starting to ending limit. Start - 20 End - 25

let start = 20;
let end = 25;

console.log('\n');
while(end >= start)
{
    console.log(end);
    end--;
    
}

//ASSIGNMENT 4
//Given a starting number and a decrement value, print all numbers from the starting number till zero deducting the decrement value each time. Starting - 13, Decrement - 4

let starting = 13;
let decrement = 4;

console.log('\n');
while(starting>0){
    console.log(starting);
    starting= starting-decrement;
}

//ASSIGNMENT 5
//Print the average of all the numbers from 1 to given limit

let limit1 = 6;
let i = 1;
let average = 0;
let sum=0;

console.log('\n');
while(i <= limit1)
{
    sum=sum+i;
    i++;
}
average = sum/limit1;
console.log("Average :", average);

//ASSIGNMENT 6
//Find out the average of the first 100 n natural numbers using for loop

let n = 1;
let sum1 = 0;
let average1 = 0;

console.log('\n');
for(n=1; n<=100; n++)
{
    sum1=sum1+n;
}
n--;
average1 = sum1/n;
console.log("Average of first 100 natural number is : " ,average1);

//ASSIGNMENT 7
//Print all the multiples of 3 till 100 using for loop

console.log('\n');

console.log("Multiples of 3 till 100 are ");
for(let k=3; k<=100; k=k+3)
{
    console.log(k);
}

//ASSIGNMENT 8
//Given a string print all the consonants which are not a,e,i,o,u using for loop.

let str = "Meghalaya";
let j = 0;

console.log('\n');
for(j=0; j<str.length; j++)
{
    if((str[j] !== 'a') && (str[j] !== 'e') && (str[j] !== 'i') && (str[j] !== 'o') 
    && (str[j] !== 'u'))
    {
        console.log(str[j]);
    }
}

//ASSIGNMENT 9
//Given a string find out the length of that string

let str1 = "Mizoram"
let len = str1.length;

console.log('\n');
console.log("Length of the string " + str1 + " is " + len);

//ASSIGNMENT 10
//Given a string, print the first character and last character of that string

let str2 = "ASSIGNMENT";
let len1 = str2.length;

console.log('\n');
console.log("First Character is " , str2[0]);
console.log("Last Character is " , str2[len1 - 1]);

//ASSIGNMENT 11
//Given a string print the odd indexes of that string using for loop

let str3 = "EDSTEM";
let z=1;

console.log('\n');
console.log("Odd indexes of the string " + str3 + " is ");
for(z=1; z<str3.length; z=z+2)
{
    console.log(str3[z]);
}

//ASSIGNMENT 12
//Find out the sum of the first 10 natural numbers using for loop

let sum2 = 0;

console.log('\n');
for(let m=1; m<=10; m++)
{
    sum2 = sum2 + m;
}
console.log("Sum of the first 10 Natural number is ", sum2);