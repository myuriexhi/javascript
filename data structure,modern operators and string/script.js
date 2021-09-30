/*
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length}days:`;

for (const day of properties) {
  openStr += `${day},`;
}
console.log(openStr);

//property values

const values = Object.values(openingHours);
console.log(values);

//entire object
const entires = Object.entries(openingHours);
//console.log(entires);

//[key,value]
for (const [key, { open, close }] of entires) {
  console.log(`on ${key} we open at ${open} and  close at   ${close}`);
}

//sets

const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(ordersSet);

console.log(new Set('jonas'));

console.log(ordersSet, ResizeObserverSize);
console.log(ordersSet.has('pizza'));
console.log(ordersSet.has('bread'));
ordersSet.add('garlic bread');
ordersSet.add('garlic bread');
ordersSet.delete('risotto');
//ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);
//example
const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

console.log(new Set('jonassschmedded').size);

// map fundamentals

const rest = new Map();
rest.set('name', 'clasico italiano');
rest.set(1, 'firenze,italy');
console.log(rest.set(2, 'lisbon,portugal'));

rest
  .set('categorise', ['italian', 'pizzeria', 'vegetarian', 'organic'])
  .set('open', 11)
  .set(close, 23)
  .set(true, 'we are open:d')
  .set(false, 'we are closed:(');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categorise'));
rest.delete(2);

const arr = [1, 2];
rest.set(arr, 'test');
rest.set([1, 2], 'test');
rest.set(document.querySelector('h1'), 'heading');

console.log(rest);
console.log(rest, ResizeObserverSize);

console.log(rest.get([1, 2]));

const question = new Map([
  ['question', 'what is the best programming languge in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct👍'],
  [false, 'try again!'],
]);

console.log(question);

//conver object to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`answer $ {key}: ${value}`);
}
const answer = Number(prompt('your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);


//working with string -part1


const airline = 'tap air portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf('')));
console.log(airline.slice(airline.lastIndexOf('') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkmiddleseat = function (seat) {
  //b and e are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('you got the middle seat😊');
  else console.log('you got lucky😎');
};

checkmiddleseat('11B');
checkmiddleseat('23C');
checkmiddleseat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));

console.log(typeof new String('jonas').slice(1));


//Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airb'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


//working with string part-3

console.log('a+very+nice+string'.split('+'));
console.log('mayuri patel'.split(' '));

const [firstname, lastname] = 'mayuri patel'.split(' ');

const newName = ['Mis.', firstname, lastname.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesupper = [];

  for (const n of names) {
    //namesupper.push(n[0].toUpperCase() + n.slice(1));
    //};
    namesupper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesupper.join(' '));
};

capitalizeName('mayuri pratik patel');
capitalizeName('mayuri patel');

//padding

const message = 'go to  gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('mayuri'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4233155543322876));
console.log(maskCreditCard('233334545677855464'));
console.log(maskCreditCard('2333345456778554646788'));

//repeat

const message2 = 'Bad waether.......All Departues Delayed....';
console.log(message2.repeat(7));

const planesInline = function (n) {
  console.log(`There are ${n} planes in linr ${'✈'.repeat(n)}`);
};
planesInline(5);
planesInline(3);
planesInline(12);
*/

//// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const text = document.querySelector('textarea').value;

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;

  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
