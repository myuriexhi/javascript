// defult parameters
/*const bookings = [];

const createbooking = function (
  flightnum,
  numpassangers = 1,
  price = 199 * numpassangers
) {
  //ES5
  //numpassangers = numpassangers || 1;
  //price = price || 199;
  const booking = {
    flightnum,
    numpassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createbooking('LH123');
createbooking('LH123', 2, 800);
createbooking('LH123', 2);
createbooking('LH123', 5);
createbooking('LH123', undefined, 1000);


const flight = 'LH234';
const jonas = {
  name: 'jonas schmedtmann',
  passport: 2335486799,
};

const checkIn = function (flightnum, passenger) {
  flightnum = 'LH235';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 2335486799) {
    alert('checkin!');
  } else {
    alert('wrong passport!');
  }
};

//checkIn(flight, jonas);
//console.log(flight);
//console.log(jonas);

//is the sAME AS DOING
//const flightnum = flight;
//const passenger = jonas;

const newpassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newpassport(jonas);
checkIn(flight, jonas);


transformer('javascript is best!', upperfirstword);
transformer('javascript is the best', oneword);

// js uses callbacks all the time

const high5 = function () {
  console.log('🖐');
};
document.body.addEventListener('click', high5);

['mayuri', 'partik', 'hardik', 'resu'].forEach(high5);


//function returning function

const greet = function (gretting) {
  return function (name) {
    console.log(`${gretting} ${name}`);
  };
};
const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('steven');

greet('hello')('jonas');

//chellenge

const greetarr = gretting => name => console.log(`${gretting} ${name}`);
greetarr('hi')('jonas');

//the call and apply methods

const lufthansa = {
  airline: 'lufthansa',
  iatacode: 'LH',
  booking: [],

  //book:function(){}

  book(flightnum, name) {
    console.log(
      `${name} booked a seat on ${this.airline}flight ${this.iatacode}${flightnum}`
    );
    this.booking.push({ flight: `${this.iatacode}${flightnum}`, name });
  },
};
lufthansa.book(239, 'mayuri patel');
lufthansa.book(345, 'pratik patel');
console.log(lufthansa);

const eurowings = {
  airline: 'eurowings',
  iatacode: 'EW',
  booking: [],
};

const book = lufthansa.book;
//does not work
//book(23,'pratik patel');

// call method
book.call(eurowings, 23, 'pratik patel');
console.log(eurowings);

book.call(lufthansa, 239, 'hardik patel');
console.log(lufthansa);

const swiss = {
  airline: 'swiss air lines',
  iatacode: 'LX',
  booking: [],
};

book.call(swiss, 587, 'reshma patel');
console.log(swiss);

//apply method

const flightdata = [583, 'george cooper'];
book.apply(swiss, flightdata);
console.log(swiss);

book.call(swiss, ...flightdata);

//bind method
//book.call(eurowings, 23, 'pratik patel');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'mayuri patel');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('mayuri patel');
bookEW23('pratik patel');

//with event listeners

lufthansa.planes = 300;
lufthansa.buyplane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyplane.bind(lufthansa));

//partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));




///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // register answer

    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]






// immediatly invoked function expression

const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

(function () {
  console.log('this will never run again');
})();

(() => console.log('this will also  never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
//console.log(isPrivate);
console.log(notPrivate);


// closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();


booker();
booker();
booker();

console.dir(booker);


// more closures example

//example 1

let f;

const g = function () {
  const a = 20;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 555;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// reassigning function
h();
f();
console.dir(f);

//Example 2

const boardpassengers = function (n, wait) {
  const pergroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n}passenger`);

    console.log(`there are 3 groups,each with ${pergroup}passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} secounds`);
};

const pergroup = 1000;
boardpassengers(180, 3);

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
