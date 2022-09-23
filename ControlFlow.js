//Loops
//FOR LOOPS
// for (let i = 0; i < 5; i++) {
//    console.log('in loop:', i); 
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];
// for(let i = 0; i < names.length; i++){
//     //console.log(names[i]);// it outputs the objects in the above array accordingly as the loops keeps running until it gets terminated
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }

//WHILE LOOPS: it's just like the for loop, the only difference is the syntax
// let i = 0// in while loop there has to be an existing variable i.e 'i'
// while (i < 5) {
//     console.log('in loop:', i);
//     i++// to avoid an infinite loop
// }

// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while(i < names.length){
//     console.log(names[i]);
//     i++;
// }

//DO WHILE LOOPS: It allows the code run at least once even if the condition is not true

// let i = 5;
// do{
//     console.log('val of i is:', i);
//     i++
// }while(i < 5);// a way to run a block of code inside a loop whether the conditions are true/false

//CONDITIONAL STATEMENTS
//IF STATEMENTS
// const age = 25;
// if(age > 20){
//     console.log('you are over 20 years old');
// }

//ELSE IF STATEMENTS
const password = 'p@ss';
// if(password.length >= 12){
//     console.log('that password is super strong');
// } else if(password.length >= 8){
//     console.log('that password is long enough ');
// } else{
//     console.log('that password is too short');
// }

//LOGICAL OPERATORS - OR || and AND &&
// if(password.length >= 12 && password.includes('@')){
//          console.log('that password is super strong');//both the conditions have to be true in order to run that block of code
//      } else if(password.length >= 8 || password.includes('@')){
//          console.log('that password is strong enough ');//with this operator only require one of the conditions to be true to execute the code
//      } else{
//          console.log('that password is not strong enough');
//      }

//LOGICAL NOT(!)// it alternates a boolean value e.g !true = false , !false = true. it opposes a value
// let user = false;
// if (!user){
//     console.log('you must be logged in to coninue');
    
// }

// console.log(!true);
// console.log(!false);

// //break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];

// for (let i = 0;  i < scores.length;  i++){
//     if(scores[i]=== 0){
//        continue;
//     }

//     console.log('your score:', scores[i]);


 
//     if(scores[i] === 100){
//        console.log('congrats, you got the top score!');
//        break;
//     }
// }

// const grade = 'D';
// // using switch statements
// switch (grade) {
//     case 'A':
//         console.log('You got an A!');
//         break;// you use the break value to break the statement incase one of the statements tally with the variable. if the break value isn't added, it will output the function that matches the variable and also every other funtion after that. 
//     case 'B':
//         console.log('You got a B!');
//         break;
//     case 'C':
//         console.log('You got a C!');
//         break;
//     case 'D':
//         console.log('You got a D!');
//         break;
//     case 'E':
//         console.log('You got an E!');
//         break;
//     default:
//         console.log('Not a valid grade');
        
// }

// //using if statements
// if(grade === 'A'){
//     console.log('You got an A!');

// } else if(grade === 'B'){
//     console.log('You got a B!');

// } else if(grade === 'C'){
//     console.log('You got a C!');
    
// } else if(grade === 'D'){
//     console.log('You got a D!');
    
// } else if(grade === 'E'){
//     console.log('You got a E!');
    
// } else{
//     console.log('Not a valid grade');

// }

//variables & block scopes

// let age = 30;//it has global scope because it located at the root of the file. global scope mans it can be accessed anywhere in the file

// if(true){
//     age = 40// changing it inside the code block
//     let name = alvin// this is a local scope. it can only be used inside the code block
//     console.log('inside code block:', age, name);

//     if(true){
//         console.log('inside 2nd code block:', age)//a nested code block takes the most recent value; for example the variable age is going to be equals to 40 because that's most recent update ;
//     }
// }

// console.log('outside code block:', age);



