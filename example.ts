console.log('Hello World!')

function greeter(person: String, date: Date) {
    console.log(`Hello ${person} and today is ${date.toDateString()}`)
    console.log(`Hello ${person} and today is ${date.toDateString()}`)
}

greeter('John', new Date());


function newFn(name: string): string {
    console.log('Hello ' + name);
    return 'good afternoon';
}

const val = newFn('akash');

async function getNumber(): Promise<number> {
    return 12;
}

const primeNumbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29];

const rockBands = ['Metallica', 'Iron Maiden', 'AC/DC', 'Judas Priest', 'Black Sabbath'];

primeNumbers.forEach((num) => {
    console.log(num);
});

rockBands.forEach((band) => {
    console.log(band);
});


function printCoordinates(point: { x: number, y: number, z?: number}) {
    console.log(`The coordinates are ${point.x}, ${point.y} and ${point.z}`);
}

const p1 = {x: 10, y: 12, z: 13};

printCoordinates(p1);

function getName(name: {first: string, last?: string}) {
    console.log(name.last?.toLowerCase());
    console.log('Hello ' + name.first + ' ' + name.last);
}

getName({first: 'John'});
getName({first: 'John', last: 'Doe'});

function getId(id: string | number) {
    console.log('The id is ' + id);
}

getId("123");
getId(123);


function welcomePeople(x:string[] | string) {
    if (typeof x === 'string') {
        console.log(x);
    }
    else {
        console.log(x.join(' and '));
    }
}

welcomePeople('John');

type Point = {
    x: number,
    y: number
}


function cords(pt:Point) {
    console.log('The coordinates are ' + pt.x + ' and ' + pt.y);
}

type ID = string | number;

function printId(id: ID) {
    console.log('Your id is ' + id);
}

// type emp = {
//     name: string
// }

// type emp = {
//     id: ID
// }

interface emp {
    name: string
}

interface emp {
    id: ID
}

const e1: emp = {
    name: 'John',
    id: '12'
}

type point = {
    x: number, 
    y: number
}

// type threeDPoint = point & {
//     z: number
// }


// const pt: threeDPoint = {
//     x: 10,
//     y: 12,
//     z: 4
// }

interface threeDPoint {
    x: number,
    y: number,
}

interface threeDPoint {
    z: number
}

const pt: threeDPoint = {
    x: 10,
    y: 12,
    z: 4
}


// literal types

let changingString = "heelo";


const constString = "hello";

let changNum = 120;
const constNum = 12;

type directionType = 'left' | 'right' | 'top' | 'bottom';

function move(direction: directionType){
    console.log(`Move ${direction}`);
}

move('left')

function greaterThan5(a: number): 0 | 1{
    return a > 5 ? 1 : 0;
}

const res = greaterThan5(4);

// Literal Inference

function handleRequest(url: string, method: 'GET' | 'POST' | 'DELETE') {
    console.log(`send a ${method} request to ${url} `);
}


const reqObj = {url: 'example.com/orders', method: 'GET'} as const;

// handleRequest(reqObj.url, reqObj.method as 'GET')
handleRequest(reqObj.url, reqObj.method)



// non null operator !

function random(x: string | null) {
    console.log(x?.charAt(1));
}


const constStr = "akash";

let changStr = "akash";

class Car {
    constructor() {
        console.log('Car constructor');
    }

    drive() {
        console.log('Car drive');
    }
}

let c1= new Car();

c1.drive();

function sayhello(name: string) {
    console.log('Hello ' + name);
}

sayhello('John');

const coordinates = JSON.parse('{"x": 10, "y": 20}');

const value = JSON.parse('2');

const s: string = JSON.parse('"hello"');

const booleanVal: boolean = JSON.parse('true');


let a: number;

let colors = ['red', 'green', 'blue'];

let foundColor: boolean;

for(let color in  colors) {
    if(color === 'green') {
        foundColor = true;
    }
}
foundColor = colors.includes('green');

let numbers = [-10, -1, 12];

let numberAboveZero: (boolean | number)[] = numbers.map((num) => (num > 0 ? num: false));

console.log('numberAboveZero', numberAboveZero);

// type annotations and inference with functions
const add = (a: number, b: number): number => (a+b);

let r = add(11, 12);

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

// destructuring with annotations
const logWeather = ({date, weather}: {date: Date, weather: string}): void  => {
    console.log('Date is ' + date);
    console.log('Weather is ' + weather);
}

logWeather(todaysWeather);

// working with objects

const profile = {
    name: 'John',
    age: 20,
    coords: {
        lat: 0,
        long: 15
    },
    setAge(age: number): void {
        this.age = age
    }
}

const {age}: {age: number} = profile

const  {coords: {lat, long}}: {coords: {lat: number, long: number}} = profile

console.log('lat', lat);
console.log('long', long);


// typed arrays
const carManufacturers = ['ford', 'toyota', 'chevy'];

const upperCaseCarManufacturers = carManufacturers.map((car: string): string => car.toUpperCase())

console.log('upperCaseCarManufacturers', upperCaseCarManufacturers);

class Animal {
    whatAmI(): void {
        console.log('animal');
    }
}

interface Animal {
    eat(): void;
}

class Dog extends Animal {
    bark(): void {
        console.log('woof woof');
    }
}