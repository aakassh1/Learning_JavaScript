const score = 400;
console.log(score);

const bal = new Number(1000); // create object of number 
console.log(bal);
console.log(typeof bal); // object

console.log(bal.toString()); // 1000
console.log(typeof bal.toString()); // string
console.log(typeof bal); // bal is still object

console.log(bal.toFixed(2)); // 1000.00 => generates the decimal values after the number returns stirng
console.log(typeof bal.toFixed(2)); // string   


const price = 23.89921;
console.log(price.toPrecision(3)); // 23.9 => gives precise value upto the given range by rounding of the last digits

const price1 = 123.899122;
console.log(price1.toPrecision(3)); // 124 => gives precise value upto the given range by eleminating the remaining ones

const zeros = 100000000;
console.log(zeros.toLocaleString()); //100,000,000 => according to us standards

console.log(zeros.toLocaleString('en-IN')); // 10,00,00,000 => according to Indian standards

/*++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++ */

console.log(Math); // Math is an object in js which have many properties 

console.log(Math.PI); // 3.14
console.log(Math.abs(-3)); // 3
console.log(Math.sqrt(37)); // 6.082762530298219
console.log(Math.round(4.9)); // 5
console.log(Math.random()); // 0.08199779953959041
console.log(Math.ceil(4.9)); // 5
console.log(Math.floor(4.9)); // 4

console.log(Math.min(4,3,5,2,4,2)); // 2
console.log(Math.max(3,1,4,7,85,3)); // 85

console.log(Math.random()); // 0.6411468453502986 => Generates a random number between 0 and 1

console.log((Math.random()*10)+1) // will always return more than 0 and less than 11

// To get the random numbers within a range
let min = 10;
let max = 20;

console.log(Math.floor(Math.random() * (max-min+1))+min);