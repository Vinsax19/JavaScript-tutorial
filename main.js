// alert("hello world");
// console.log(2)

// let age = 25;
// let year = 2019// you use 'let' incase you will need to change the variable in the future.....but if want a value that cannot be over-written use 'const'

// console.log(age, year);

//JavaScript Data Types

//NUMBER
// let radius = 10;
// const pi = 3.14;

// math operators +, -, *, /, **, %
// let  result = pi * radius**2
// let likes = 10;
// likes = likes + 1
// likes ++
// likes += 10
// likes -= 3
// likes *= 4
// likes /= 2 these are all shorthand notations for the various math operators
// console.log(likes)

// number concantenation
// let result = 'the blog has ' + likes +' likes';
// console.log(result)
//STRINGS
// console.log('hello, world');

// let email = 'alvin.onichabor05@gmail.com';
// console.log(email);

// //STRING CONCATENATION
// let firstName = 'Alvin';
// let lastName = 'Onichabor';
// let fullName = firstName + ' ' + lastName;
// console.log(fullName);

// // getting characters: to get a character or a letter from a given word..
// console.log(fullName[2]);

// //string length
// console.log(fullName.length);

// // STRING METHODS
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName); 

//COMMON STRING METHODS
// let email = 'alvin.onichabor05@gmail.com';
// let result = email.lastIndexOf('a');
// let result = email.slice(0,5)
// let result = email.substr(4,10)// it is a bit like slice but unlike slice it cuts the amount of characters you pass in as the end argument e.g (4,10) it picks from index 4 to the 10th index after 4
// let result = email.replace('a', 'b')
// console.log(result);

//TEMPLATE STRINGS
// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

// concatenation way
// // let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes ';
// console.log(result);

//template strings way
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result);

//creating html templates
// let html = `
// <h2>${title}</h2>
// <p>By ${author}</p>
// <span>This blog has ${likes} likes</span>`
// console.log(html)

//BOOLEAN
//NULL
//UNDEFINED
//OBJECT

//ARRAYS: Used to store multiple data in a single variable e.g
let names = ['shaun', 'ryu', 'chun-li'];
// console.log(names);
// names[1] = 'alvin'// to override the above statement or to replace an index
// console.log(names[1]);// to get a particular index
// console.log(names.length);//to get the length of array

//ARRAY METHODS
// let result = names.join(' , ');// to join the items in array together and to divide each array with a comma or any thing you specify
// let result = names.indexOf('ryu');// to get the index of the names or item in the array specificed
//let result = names.concat(['ken', 'crystal', 'alvin']);//to concatenate or add arrays together 
//let result = names.push('ken');// to add to the array but this function only outputs the length of the updated array. however if you console log 'names' you can view the updated array; Note: it is a distruptive function
//result = names.pop();// it logs or output the last index in array
console.log(result);

//SYMBOL

// When you pass a value into a method, it is called an argument
// let index = email.indexOf('@');//An example of an argument
// console.log(index);