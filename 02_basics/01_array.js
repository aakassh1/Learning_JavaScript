
/**
 * Array: Array enables us to store collection of multiple
 *        elements on reference of single variable 
 *        Arrays are resizeable and shrinkable
 *        
 *        Copy operation in array always creates a Shallow Copy
 * 
 * Shallow Copy: Shallow Copy is the copy of object who shares the
 *               same refrence of the original object
 *               which means changes in copy will be reflected in orginal array 
 *
 * Deep Copy: Deep Copy is the copy of object which do not shares the same refrence 
 *            of original object
 *            
 * 
 */


const arr = [1, 2, 3, 4, 5.8, true, "Aakash"];
console.log(arr);
console.log(typeof arr); // object

const a = new Array(1,2,3,4,56);
console.log(a);
console.log(typeof a); // object

// Array Methods
a.push(45);
a.push(44);
console.log(a);
a.pop();
console.log(a);

a.unshift(3); // It will insert the given value at front but it will shift all values from last 
              // so it is also a time taking process not recommanded
console.log(a);

a.shift(); // It will remove the value present at the front
console.log(a);

console.log(a.includes(4)); // true => used to check value present or not return a boolean value 
console.log(a.indexOf(91)); // -1 => checks on which index the value is present

const newArr = a.join(); // It binds the array and also converts in into the string
console.log(newArr);
console.log(typeof newArr); // string

// slice method
let myArr = new Array(0,1,2,3,4,5,6,7);
console.log("Original Array: ",myArr);

// 

let slcArr = myArr.slice(1,3); // Returns the copy of section of the array where higher range is not included
console.log("Slice Array: ",slcArr);

// spliec method
console.log("Original Array: ",myArr);

let splArr = myArr.splice(1,3); // It remove the selected range elements from the original array and returns 
console.log("Spliced Array: ",splArr);

console.log("Original Array after splice: ",myArr);
