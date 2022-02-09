//ASSIGNMENT 1
//Given an array with name, age and gender convert it to object and print keys and values by looping over it using for in loop

let array = ['Shanu', 23, 'F'];
var obj = {};
obj.name = array[0];
obj.age = array[1];
obj.gender = array[2];

console.log('\n')
for(let keys in obj)
{
    let values;
    values = obj[keys];
    console.log(keys+ " - " +values);
}

//ASSIGNMENT 2
//Given a string , calculate the occurrence of each and every character and print the output.

let str = "calculate";
var obj = {};
let count = 1;
for(i=0; i<str.length; i++)
{
    if(!obj[str[i]])
    {
        obj[str[i]] = count;
    }else
    {
        obj[str[i]] = count + 1;
    }
}

console.log('\n');
for(let keys in obj)
{
    console.log(keys+ " - " +obj[keys]);
}

//ASSIGNMENT 3
//Given user's names and their phone numbers , query the given user and find the phone number .

let user = [
    {
        name: 'Shana',
        phno: 9895766785
    },
    {
        name: 'Sherry',
        phno: 9633985125
    },
    {
        name: 'Aadhi', 
        phno: 7736451282
    }
];

console.log('\n');
for(i=0; i<user.length; i++)
{
    if(user[i].name === 'Sherry')
    {
        console.log(user[i].phno);
    }
}

//ASSIGNMENT 4
//Given an array , find the unique elements 

let array1 = [10, 20, 30, 10, 40, -2];
var obj1 = {};
let count1 = 1;
for(i=0; i<array1.length; i++)
{
    if(!obj1[array1[i]]){
        obj1[array1[i]] = count1;
    }else
    {
        delete obj1[array1[i]];
    }
}

console.log('\n');
console.log(Object.keys(obj1));

//ASSIGNMENT 5
//Given two words (small case) if they are anagrams print "TRUE" otherwise "FALSE" 

let str1 = 'end';
let str2 = 'den';
let L1 = str1.length;
let L2 = str2.length;

if(L1 != L2)
{
    console.log(..."FALSE");
}
let a = str1.split('').sort().join('');
let b = str2.split('').sort().join('');

console.log('\n');
if(a === b)
{
    console.log(..."TRUE");
}else
{
    console.log(..."FALSE");
}

//ASSIGNMENT 6
//Given an employees database query the employees who are from hyderabad and having experience more than 3 years

var database = [
    { name: 'vicky', 
      age: 24, 
      married: false,  
      address: { city: 'hyderabad', state: 'andhra', pincode: '516003' }, 
      skills: ['react', 'html', 'nodejs'], 
      experience: 2
    }, 
    { name: 'nirmal', 
      age: 20, 
      married: true, 
      address: { city: 'hyderabad', state: 'telengana', pincode: '500004' }, 
      skills: ['css', 'figma'], 
      experience: 4 
    }, 
    { name: 'neeraj', 
      age: 26, 
      married: false, 
      address: { city: 'bengaluru', state: 'karnataka', pincode: '510006' }, 
      skills: ['aws', 'angular', 'nodejs'], 
      experience: 5 
    } 
];

console.log('\n');
for(i=0; i<database.length; i++)
{
    if(database[i].address.city == 'hyderabad' &&
       database[i].experience > 3)
    {
        console.log(database[i].name);
    }
}




