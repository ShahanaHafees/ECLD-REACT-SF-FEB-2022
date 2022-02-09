//ASSIGNMENT 1
//Write a function named addNumbers which takes two numbers as input and return their sum

function addNumbers(num1, num2)
{
    return(num1+num2);
}
console.log('\n')
console.log("Sum = ", addNumbers(3,6));

//ASSIGNMENT 2
//Write a function to find the absolute difference of two numbers

function absoluteDiff(num3, num4)
{
    var diff = num3 - num4;
    return difference = Math.abs(diff);
}
console.log('\n');
console.log("Absolute Difference = ", absoluteDiff(4,18));


//ASSIGNMENT 3
//Write a function isOdd which returns a boolean value based the number is odd or not

function isOdd(number)
{
    if(number % 2 == 0)
    {
        return false;
    }
    return true;
}
console.log('\n');
console.log(isOdd(27));

//ASSIGNMENT 4
//Write a function function which prints the odd numbers from 0 to a given limit(included)

function oddNumber(limit)
{
    for(i=1; i<=limit; i++)
    {
        if(i % 2 != 0)
        {
            console.log(i);
        }
    }
}
console.log('\n');
oddNumber(10);

//ASSIGNMENT 5
//Write a function to calculate the average of an array. If there are no items in the array it should return 0

let sum = 0;
function avgArray(lmt, arr)
{
    if(n === 0)
    {
        return 0;
    }else
    {
    for(i=0; i<=lmt; i++)
    {
        sum  = sum + i;
    }
    let average = sum/lmt;
    console.log("Average is ", average);
    }
}
console.log('\n');
let array =[];
let n= array.length;
console.log(avgArray(n, array));

//ASSIGNMENT 6
//Write a function to convert a character to lower case

let word = "PaRIS";
function convert()
{
    console.log(word.toLowerCase());
}
console.log('\n');
convert();