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
*/

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
