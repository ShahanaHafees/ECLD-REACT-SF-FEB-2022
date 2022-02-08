//ASSIGNMENT 1
//Given an array of string join them with a comma ,

let string = ['HTML', 'CSS', 'JAVA', 'JS'];
let str = '';

console.log('\n');
for(i=0; i<string.length-1; i++)
{
    str = str + string[i] + ','; 
}
str = str + string[3];
console.log(str);

//ASSIGNMENT 2
//Given an array or string print the total no of characters

let string1 = ['HTML', 'CSS', 'JAVA', 'JS', 'ANDROID'];
let count = 0;

console.log('\n');
for(i=0; i<string1.length; i++)
{
    if(string1[i] !== '')
    {
        count = count + string1[i].length;
    }
}
console.log("Total number of characters = ", count);

//ASSIGNMENT 3
//Given an array of game, scores print the highest and lowest score

let array = [100, 20, 31, 150, 39, 72];
let max = array[0];
let min = array[0];

console.log('\n');
for(i=0; i<array.length; i++)
{
    if(array[i] >= max)
    {
        max = array[i];
    }
    if(array[i] < min)
    {
        min = array[i];
    }
}
console.log("Highest Score =", max);
console.log("Lowest Score =", min);

//ASSIGNMENT 4
//Given a matrix, print the rows and columns

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let rows = matrix.length;
let columns = matrix[0].length;

console.log('\n');
console.log("Rows =", rows);
console.log("Columns =", columns);

//ASSIGNMENT 5
//Given a matrix print the first diagonal

let matrix1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log('\n');
for(i=0; i<matrix1.length; i++)
{
    for(j=0; j<matrix1[i].length; j++)
    {
        if(i === j)
        {
            console.log(matrix1[i][j]);
        }
    }
}

//ASSIGNMENT 6
//Given an array of string generate an array whose first or last character is a

let string2 = ["assignment", "problem", "media", "upload"];

console.log('\n');
for(i=0; i<string.length; i++)
{
    if(string2[i][0] === 'a' || string2[i][string2[i].length-1] === 'a')
    {
        console.log(string2[i]);
    }
}

//ASSIGNMENT 7
//Given an array of strings print the snake case of the strings [Assume Small case strings]

let string3 = ['edstem', 'tech', 'nologies'];
let str1 = '';

console.log('\n');
for(i=0; i<string3.length-1; i++)
{
    str1 = str1 + string3[i] + '_';
}
str1 = str1 + string3[2]
console.log(str1);

//ASSIGNMENT 8
//Given an 2d Array print the difference of first and second diagonals sum 

let matrx = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
let sum = 0;
let sum1 = 0;

console.log('\n');
for(i=0; i<matrx.length; i++)
{
    for(j=0; j<matrx[i].length; j++)
    {
        if(i === j)
        {
            sum = sum + matrx[i][j];
        }
        if( i === matrx[i].length-j-1)
        {
            sum1 = sum1 + matrx[i][j];
        }
    }
}console.log("Sum of First Diagonal = ", sum);
console.log("Sum of Second Diagonal = ", sum1);
let diff =  sum - sum1;
console.log("Difference of First and Second Diagonal Sum is ", diff);

//ASSIGNMENT 9
//Given an array of numbers print the product of all numbers

let array1 = [2,3,4]
let product = 1;

console.log('\n');
for(i=0; i<array1.length; i++)
{
    product = product * array1[i];
}
console.log("Product of all numbers = ", product);

//ASSIGNMENT 10
//Given an 2d array print the mid column

let matrx1 =[ 
    [4,8,12],
    [16,20,24],
    [28,32,36]
];

console.log('\n');
for(i=0; i<matrx1.length; i++)
{
    for(j=1; j<=1; j++)
    {
        console.log(matrx1[i][j]);
    }
}
