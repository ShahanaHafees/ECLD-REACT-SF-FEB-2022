//ASSIGNMENT 1 
//Given an array of strings count all the vowel characters

let array =['edstem', 'react', 'javascript', 'html', 'css'];
let count = 0;
for(i=0; i<array.length; i++)
{
    for(j=0; j<array[i].length ; j++)
    {
        if( array[i][j] == 'a' || array[i][j] == 'e' || array[i][j] == 'i' ||
            array[i][j] == 'o' || array[i][j] == 'u' || array[i][j] == 'A' ||
            array[i][j] == 'E' || array[i][j] == 'I' || array[i][j] == 'O' ||
            array[i][j] == 'U' )
            {
                count++;
            }
    }
}
console.log("Count of Vowel Characters is ", count);

//ASSIGNMENT 2
//Given a string print "YES" if it is a palindrome "NO" if it is not one

let string = 'RADAR';
let reverseString = '';

console.log('\n');
for(i=string.length-1; i>=0; i--)
{
    reverseString = reverseString + string[i];
    console.log(reverseString);
}
console.log('\t');
if(string === reverseString)
{
    console.log(..."YES");
}else
{
    console.log(..."NO");
}

//ASSIGNMENT 3
//Given an array of marks, find out the Average

let array1 = [95, 86, 66, 94, 58];
let average, total = 0;

console.log('\n');
for(i=0; i<array1.length; i++)
{
    total = total + array1[i];
}
console.log("Array Total = ", total);
average = total / array1.length;
console.log("Average of Array Total = ", average);

//ASSIGNMENT 4
//Given an array of strings, remove all the odd length strings from it

let strings = ['edstem', 'react', 'html', 'foodie', 'coder'];

console.log('\n');
for(i=0; i<strings.length; i++)
{
    if(strings[i].length % 2 == 0 )
    {
        console.log(strings[i]);
    }
}

//ASSIGNMENT 5
//Given an array of numbers, change the multiples of 3 to ‘multiple’

let array2 = [5, 9, 8, 12, 22, 18];

console.log('\n');
for(i=0; i<array2.length; i++)
{
    if(array2[i] % 3 == 0)
    {
        array2[i] = 'multiple';
    }
}
console.log("New array after change is ", array2);

//ASSIGNMENT 6
//Given an empty array fill that array with first 10 natural numbers

let array3 =  [ ];

console.log('\n');
for(i=1; i<=10; i++)
{
    array3.push(i);
    
}
console.log(array3);

//ASSIGNMENT 7
//Given a string split it into an array of words

let string1 = "Edstem Technologies located at kerala";
let array4 =[];
let words = '';

console.log('\n');
for(i=0; i<string1.length; i++)
{
    if(string1[i] == ' ')
    {
        array4.push(words);
        words = ' ';
    }else
    {
        words = words + string1[i];
    
    }
}array4.push(words);
console.log(array4);

//ASSIGNMENT 8
//Given a string print all the Characters in the odd position (Start counting with 0)

let string2 = 'SPANISH';
let str = '';

console.log('\n');
for(i=0; i<string2.length; i++)
{
    if(i % 2 !== 0)
    {
        str += string2[i];
    }
}
console.log(str);

//ASSIGNMENT 9
//Given a sentence print the count of words (Separated by a space character)

let string3 = "Coding is Easy";
let word = '';
let arr = [];

console.log('\n');
for(i=0; i<string3.length; i++)
{
    if(string3[i] == ' ')
    {
        arr.push(word);
        word = '';
    }else
    {
        word = word + string3[i];
    }
}
arr.push(word);
console.log(arr.length);

//ASSIGNMENT 10
//Given an Array of names find out if edstem is there or not, if the given string is there print true or else print false

let array5 = ['react', 'html', 'edstm'];
let strng = 'html';
let flag = 0;

console.log('\n');
for(i=0; i<array5.length; i++)
{
    if(strng === array5[i])
    {
        flag = true;
    }
}
if(flag == true)
{
    console.log(..."TRUE");
}else
console.log(..."FALSE");