const marvelHeros = ["Ironman","Captain America","Thor","Hulk"];
const dcHeros = ["Superman","Batman","Aquaman"];

marvelHeros.push(dcHeros); // It will not simply merge these two arrays 
                           // instead it will create array inside another array

console.log(marvelHeros);

// accessing the values from inside array
console.log(marvelHeros[4][2]); // Aquaman

marvelHeros.pop(); // Removing the inside array from original array

// Merging two arrays
let allHeros = marvelHeros.concat(dcHeros); // It will merge two arrays and return a new array
console.log(allHeros);

// Using spread operation to perform same operation
let allNewHeros = [...marvelHeros,...dcHeros]; // All elements will spread and combined into the new array
                                               // It can have multiple arrays to combine at once
console.log(allNewHeros);

const numArr = [1,2,3,4,[5,6,7],[8,9,[10,11]]];
console.log("Origianl array",numArr);

const realArr = numArr.flat(Infinity); // It will extract elements form array inside another array and store
                                       // in another array in proper form
console.log("Proper array: ",realArr);

// Converting array form string

console.log(Array.from("Aakash"));
console.log(Array.isArray("Array")); // false

// Converting array from variables

let num1 = 12;
let num2 = 24;
let num3 = 36;

console.log(Array.of(num1,num2,num3));