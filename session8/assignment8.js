//ASSIGNMENT 1
//Given an array of numbers print the square of those numbers

let array = [2, 3, 5, 7, 9];

console.log('\n');
array.forEach(function(el){
    console.log(el**2);
});

//ASSIGNMENT 2
//Given an array of numbers generate an array containing the double value of the numbers

let input =[1, 2, 3];
let result = input.map(function(el){
    return el * 2;
});

console.log('\n');
console.log(result);

// console.log('\n');
// input.forEach(function(el){
//     console.log(el*2);
// });

//ASSIGNMENT 3
//Given an array of numbers extract the numbers divisible by 3

let array1 = [1,2,3,4,5,6];
let result1 = array1.filter(function(el){
    return el % 3 == 0;
});

console.log('\n');
console.log(result1);

//ASSIGNMENT 4
//Given an array of numbers print the product of all numbers

let array2 = [2,3,4];
let product = 1;
for(i=0; i<array2.length; i++)
{
    product = product * array2[i];
}

console.log('\n');
console.log(product);

//ASSIGNMENT 5
//Given an array of strings print the length of each string

let array3 = ['edstem', 'technologies'];

console.log('\n');
array3.map(function(el){
    console.log(`length of ${el} - ${el.length}`);
});

// for(i=0; i<array3.length; i++)
// {
//     let len = array3[i].length;
//     console.log(" Length of " + array3[i] + " is " +len);
// }

//ASSIGNMENT 6
//Given an array of string generate an array with their first characters

let array4 = ["Edstem", "Tech"];
let result2 = array4.map(function(el){
    return el[0];
});

console.log('\n');
console.log(result2);

//ASSIGNMENT 7
//Given an array of string generate an array whose first or last character is a

let array5 = ["assignment", "problem", "media", "upload"];
let result3 = array5.filter(function(el){
    return el[0] == 'a' || el[el.length -1] == 'a';
});

console.log('\n');
console.log(result3);

//ASSIGNMENT 8
//Given an array of strings print the snake case of the strings [Assume Small case strings]

let array6 = ["edstem", "tech"]

console.log('\n');
let result4 = array6.reduce(function(ac,el){
    console.log(ac + "_" + el);
});

//ASSIGNMENT 9
//Create a user object with name, age, gender, skills as properties and add the below methods to it
//i.addSkill method => user.addSkill(‘react’) => react should be added to user.skills property which is an array of strings
//ii. getSkills method => user.getSkills() => It should return all the skills of the user

let user = {
    name: "shahana",
    age: 23,
    gender: 'F',
    skills: ['css', 'javascript'],
    addSkill: function(skill){
        return this.skills.push(skill)
    },
    getskills:function(){
        return this.skills
    }
}

console.log('\n');
user.addSkill('react')
console.log(user.getskills());