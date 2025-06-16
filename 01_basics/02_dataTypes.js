"use strict"; // treat all JS code as newer version 

// alert(3+3) It will give a pop up on browser displaying 6 

console.log(3+3); console.log("Hii"); // Here ; is mandetory but not a good practice

// Data Types => Used to specify the which type of value to be stroed 

// 1. Number => Used to store numeric values (2 to pow 53)
let age = 18;

// 2. String => Used to store sequence of characters
let name = "Aakash";

// 3. Boolean => Used to store true or false
let check = true;

// 4. Null => Standalone value used to represent empty thing having Object type
let x = null;

// 6. Undefined => a decleared variable but not initialzed
let email;

// 7. Symbol => Used to denote or decleare a unique element

// M.Imp Object => It is a blueprint of a class used to store multiple data of multiple types


console.table([age,name,check,x,email]);

// typeof => Keyword used to check the type of data a variable holds

console.log(typeof "string"); // string
console.log(typeof null); // Object
console.log(typeof undefined) // undefined
console.log(typeof Striasdfng); // undefined
console.log(typeof 123); // number
console.log(typeof Boolean); // function
