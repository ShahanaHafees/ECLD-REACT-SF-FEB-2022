//ASSIGNMENT 1
//If the given year is a leap year print "LEAP YEAR" and if it's not a leap year print "NOT LEAP YEAR"

let year=2022;
if((year % 4 == 0) && (year % 100 != 0))
{
    console.log("It is a LEAP YEAR");
}else
{
    console.log("It is no a LEAP YEAR");
}

//ASSIGNMENT 2
// In India, a person can vote if he crosses 18years of age. Give a person year of birth print "YES" if he can vote otherwise print "NO"

let birthYear = 1998;
let currentYear = 2022;
let age = currentYear - birthYear;

console.log('\n');
if(age > 18)
{
    console.log("YES !!! is eligible to vote..");
}else
{
    console.log("NO !!! is not eligible to vote..");
}

//ASSIGNMENT 3
//Give a single character (small or upper case) if it is a Vowel print "V" in the case of consonant print "C"

let character = 'I';

console.log('\n');
if((character == 'a' || character == 'e' || character == 'i'|| character == 'o' || 
    character == 'u' || character == 'A' || character == 'E'|| character == 'I' || 
    character == 'O' || character == 'U'))
{ 
    console.log("V");
}else
{
    console.log("C");
}

//ASSIGNMENT 4
//Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

let pincode = "682024";
let len = pincode.length;

console.log('\n');
if(len == 6)
{
    console.log("VALID"); 
}else
{
    console.log("INVALID");
        
}

//ASSIGNMENT 5
//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

let north = ["JammuKashmir","Sikkim"];
let east = ["Meghalaya","Mizoram"];
let west = ["Goa","Gujarat"];
let south = ["Kerala","Karnataka"];
let state = "Meghalaya";

console.log('\n');
if((state == "JammuKashmir") || (state == "Sikkim"))
{
    console.log(state+ " belongs to North Zone");
}
else if ((state == "Meghalaya") || (state == "Mizoram"))
{
    console.log(state+ " belongs to East Zone");
}
else if ((state == "Goa") || (state == "Gujarat"))
{
    console.log(state+ " belongs to West Zone");
}
else if ((state == "Kerala") || (state == "Karnataka"))
{
    console.log(state+ " belongs to South Zone");
}

//ASSIGNMENT 6
//Given a number print if it is either "EVEN" or "ODD" (Use ternary Operators)

let number = 12;

console.log('\n');
number % 2 == 0 ? console.log("EVEN"):console.log("ODD");

//ASSIGNMENT 7
//Given two numbers a, b Print the below statements based on the condition
//"A > B"
//"A < B"
//"A = B" Note: Use Ternary Operators

let a = 9;
let b = 6;

console.log('\n');
a > b ? console.log("A > B"): a < b ? console.log("A < B"): console.log("A = B");

//ASSIGNMENT 8
//Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

let sizeCode = "M";

console.log('\n');
if(sizeCode == "S")
{
    console.log("SMALL");
}
else if(sizeCode == "M")
{
    console.log("MEDIUM");
}
else if(sizeCode == "L")
{
    console.log("LARGE");
}
else if(sizeCode == "XL")
{
    console.log("EXTRA LARGE");
}
else
{
    console.log("NONE");
}