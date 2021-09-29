'use strict';

///////////////////////////////////////
// Scoping in Practice
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reasssigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();


// variables
console.log(me);
//console.log(job);
//console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 1991;

//functions

console.log(adddecl(2, 3));
//console.log(addexpr(2, 3));
console.log(addarrow);
//console.log(addarrow(2, 3));

function adddecl(a, b) {
  return a + b;
}
const addexpr = function (a, b) {
  return a + b;
};
var addarrow = (a, b) => a + b;

//example
console.log(undefined);
if (!numproduct) deleteshoppingcart();

var numproduct = 10;

function deleteshoppingcart() {
  console.log('all product deleted!');
}
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


//console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgearrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgearrow(1980);

const Jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
Jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = Jonas.calcAge;
matilda.calcAge();

const f = Jonas.calcAge;
f();

// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);


//primitive vs objects(primituive vs reference types)

let age = 30;
let oldage = age;
age = 31;
console.log(age);
console.log(oldage);

const me = {
  name: 'jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
*/

//primitive types
let lastname = 'williams';
let oldlastname = lastname;
lastname = 'davis';
console.log(lastname, oldlastname);

// reference type
const jessica = {
  firstname: 'jessica',
  lastname: 'williams',
  age: 27,
};

const marriedjessica = jessica;
marriedjessica.lastname = 'devis';
console.log('before marriage:', jessica);
console.log('after marriage', marriedjessica);

//marriedjessica={};

//copying object

const jessica2 = {
  firstname: 'jessica',
  lastname: 'williams',
  age: 27,
  family: ['alica', 'bob'],
};

const jessicacopy = Object.assign({}, jessica2);
jessicacopy.lastname = 'davis';

console.log('before marraige:', jessica2);
console.log('after marraige:', jessicacopy);
