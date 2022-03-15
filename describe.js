// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Starting with line 36, the let function defines our variable as a name, which is "Dane". 
// Our 'if' statement says that if the name is STRICTLY equal to 'Mary", then the console log will display the message 'Hi, Mary!'.
// If it does not, the console log will then display 'How do you do?'.
// If we were to run this code, the console log would display the latter option, since Dane is not similar to 'Mary'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// In this instance, we have 2 variables, one being 'secret' and the other being a code defined as the number '123'.
// Our 'if' statement says that if the code is equal to 123, it will then be deemed 'super' secret, and then it will multiply the code by 2. 
// Additionally, if the code is greater than 250, then the code will be deemed 'duper' secret. 
// In this case, the console log will display 'super secret'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// The code below describes a scenario in which our variable is 'isStudent' and defines it as true. Additionally, we have 2 more variables for age and zip code.
// Our main if statement asks if 'isStudent' is true, AND (noted by the && symbols) the zip code is greater than 80000, then the console log will display "You're a student on the West Coast!".
// If our variable doesn't meet these initial parameters, it moves onto the next 'else' statement. This one requires that our 'isStudent' variable to be false. 
// This also changes the needs of our variable, as the '||' symbols notate that we need either OR to meet these parameters. In this case, either the student must be False or the age must be less than 30. 
// If we meet either one of these parameters, the console log will display the message 'What are you hobbies?'.
// If we do not meet either of these as well, we move onto the next else statement which requires our 'isStudent' variable to be true. If it meets this, the console log will display the message 'Welcome to Prime!'.
// If we do not meet any of the aforementioned statements, then the console log will simply display 'How about the weather?'.
// In this case, the console log would display 'Welcome to Prime!' since our student variable (which is true) is the only variable that falls within these parameters of this command.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should equal 'blue' and colorTwo should equal 'red'. We can either switch the colors or switch the numbers assigned, though switching the colors would make more sense since one comes before two.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - colorTwo should also be listed under this if statement as 'colorTwo = 'purple'.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - We need to use '&&' instead of '||', since we want to test for temp > 39 AND time >= 4. '||' is a command for OR, whereas '&&' means both variable must meet our 'if' statement parameters. 
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.


/*
let age = 21;
const minAge = 21;

// FIX - Our if statetment needs to be changed, since it's checking minAge against age, whereas we need it to be the other way around. Since we need to check if age agains minAge, we can do two potential changes.
// First, we can say 'if(age < minAge) --> console.log('no entry') --> else if --> (age >= minAge) --> console.log('enter').
// Otherwise, we can also say 'if(age >= minAge) --> console.log('enter') --> else --> console.log('no entry').
// The latter code would be better, as the first option is simply a longer version of checking for this.


if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
