// constructor function and new operators
/*
const person = function (firstname, brithyear) {
  this.firstname = firstname;
  this.brithyear = brithyear;

  //never to this

  // this.calage = function () {
  //   console.log(2037 - this.brithyear);
  // };
};
const mayuri = new person('mayuri', 1991);
console.log(mayuri);

//1. new {} is created
//2.function is called,this={}
//3.{}liked to prototype
//4.function automatically return{}

const pratik = new person('pratik', 2017);
const hdk = new person('hdk', 1975);
console.log(pratik, hdk);

console.log(mayuri instanceof person);

//prototypes

console.log(person.prototype);

person.prototype.calage = function () {
  console.log(2037 - this.brithyear);
};
mayuri.calage();
pratik.calage();

console.log(mayuri.__proto__);
console.log(mayuri.__proto__ === person.prototype);

console.log(person.prototype.isPrototypeOf(mayuri));
console.log(person.prototype.isPrototypeOf(pratik));
console.log(person.prototype.isPrototypeOf(person));

//.isPrototypeOfLikedobjects

person.prototype.species = 'homo sapiens';
console.log(mayuri.species, pratik.species);

console.log(mayuri.hasOwnProperty('firstname'));
console.log(mayuri.hasOwnProperty('species'));

console.log(mayuri.__proto__);

//object .prototype(top of prototype chain)
console.log(mayuri.__proto__.__proto__);
console.log(mayuri.__proto__.__proto__.__proto__);

console.dir(person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3]; //new Array===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();


//ES6 Classes

//class expression

const PersonCl = class {};

//class declaration

const PersonCal = class {
  constructor(firstname, brithyear) {
    this.firstname = firstname;
    this.brithyear = brithyear;
  }
  //method will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
};

const maahi = new PersonCal('maahi', 1996);
console.log(maahi);
maahi.calcAge();
console.log(maahi.age);

console.log(maahi.__proto__ === PersonCal.prototype);
// PersonCal.prototype.greet = function () {
//   console.log(`hey ${this.firstname}`);
// };
maahi.greet();

//1.classes are not hoisted
//2.class are first-class citizes
//3.classes are exicuted in strict mode

//////////////setters and getters///////////////////////////

const walter = new PersonCal('walter white', 1965);

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


//object create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, brithyear) {
    this.firstName = firstName;
    this.brithyear = brithyear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const mayu = Object.create(PersonProto);
mayu.init('mayu', 1997);
mayu.calcAge();
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

//////////////////////////////////////////////////////////
// Inheritance Between "Classes": Constructor Functions

const Person1 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person1.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student1 = function (firstName, birthYear, course) {
  Person1.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student1.prototype = Object.create(Person1.prototype);

Student1.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student1('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student1);
console.log(mike instanceof Person1);
console.log(mike instanceof Object);

Student1.prototype.constructor = Student1;
console.dir(Student1.prototype.constructor);
*/
//////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2037 - this.birthYear
      } years old, but as a student I feel more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  // console.log(`My name is ${this.fullName} and I study ${this.course}`);

  // FIX:
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
