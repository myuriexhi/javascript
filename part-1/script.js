
//value & variable

/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("mayuri");
console.log(23);

let firstname = "maahi";
console.log(firstname);
console.log(firstname);
console.log(firstname);

let mayuri_patel = "MP";
let $function = 27;

let person = "mayuri"
let PI = 3.1415;

let myfirstjob = "programmer";
let mycurrentjob = "teacher";

console.log(myfirstjob);
console.log(mycurrentjob);


// data type

let javascriptIsfun = true;
console.log(javascriptIsfun);

//console.log(typeof true);
console.log(typeof javascriptIsfun);
//console.log(typeof 23);
//console.log(typeof 'mayuri');

javascriptIsfun = 'yes!';
console.log(typeof javascriptIsfun);

// undefine value
let year;
console.log(year);
console.log(typeof year);
// number
year = 1996;
console.log(typeof year);

//null

console.log(typeof null);

// let const and var

let age = 30;
age = 31;

const brithyear = 1996;
//brithyear = 1993;

//const job;

var job = "programmer";
job = "teacher";

lastname = "patel";
console.log(lastname);

//operators
//math operators
const now = 2037
const agemayuri = now - 1996;
const agepratik = now - 1994;
console.log(agemayuri, agepratik);

console.log(agemayuri * 2, agemayuri / 10, 2 ** 3);

const firstname = "mayuri";
const lastname = "patel";
console.log(firstname + '' + lastname);

//assigment operators

let x = 10 + 5;
x += 10; // x=x+10=25
x *= 4;//x=x*4=100
x++; // x= x +1= 101
x--; // x= x-1;
x--;
console.log(x);

//comparison operators

console.log(agemayuri > agepratik);
// >,<,>=,<=
console.log(agepratik >= 43);

const isfullage = agepratik >= 18;
console.log(now - 1991 > now - 2018);


// operator precedence

const now = 2037
const agemayuri = now - 1996;
const agepratik = now - 1994;

console.log(now - 1991 > now - 2018);
console
    .log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = agemayuri * agepratik / 2
console.log(agemayuri, agepratik, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


//const massMark = 78;
//const heightMark = 1.69;
//const massJohn = 92;
//const heightJohn = 1.95;


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;


const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark < BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);


// string and template literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log('string
multiple
lines');

// taking decision if /else statments

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉


*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;*/

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('mayuri'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion

console.log('i am' + 23 + 'year old')
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '2');

let n = '1' + '1';
n = n - 1;
console.log(n);


//truthy and falsy values
// 5 falsy value 0,'',undefine,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('mayuri'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("don't spend is all :)");
}
else {
    console.log("ypu shoud get a job");

}

let height = 0;
if (height) {
    console.log('YAY! height is define');

} else {
    console.log("height is undefine")
}



// equality operators"== vs ===

const age = '18';
if (age === 18) console.log('you just became an adult:d');
if (age == 18) console.log('you just became an adult:d (loose)');

const fav = Number(prompt("what's your favourite number?"));
console.log(fav);
console.log(typeof fav);

if (fav === 23) { // '23' === 23 -> false
    console.log('cool! 23 is amazing number!')


} else if (fav === 7) {
    console.log('7 is also a cool number')
}
else if (fav === 9) {
    console.log('9 is also a cool number')
} else {
    console.log('number is not  23 or 7 or 9'

    )
}
if (fav !== 23) console.log('why not 23?');



const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}




////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1

/*
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}

// switch statment

const day = 'friday';

switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;

    case 'tuesdAY':
        console.log('prepare theory videos');
        break;

    case 'wensday':
    case 'thursday':
        console.log('write code examples');
        break;
    case 'friday':
        console.log('record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('enjoy the weekend:d');
        break;
    default:
        console.log('not a valid day');
}

if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');

} else if (day === 'tuesday') {
    console.log('prepare theory videos');


} else if (day === 'wensday' || day === 'thursday') {
    console.log('write code examples');

} else if (day === 'friday') {
    console.log('record videos');

} else if (day === 'saturday' || day === 'sunday') {
    console.log('enjoy the weekend:d');

} else {
    console.log('not a vaild day');

}


// statment and expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);



// conditional (ternary)operators

const age = 23;

//age >= 18 ? console.log('I like to drink wine') :
//console.log('i like drink water');
const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine';

} else {
    drink2 = 'water ';

}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine ' : 'water '}`);

////////////////////////////////////
// Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉


const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

