const date = new Date();

console.log(date); // 2025-06-18T11:17:52.247Z not recommanded
console.log(typeof date); // object => date is an object which has various properties
console.log(date.toString()); // Wed Jun 18 2025 16:50:31 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()); // 6/18/2025
console.log(date.toDateString()); // Wed Jun 18 2025
console.log(date.toLocaleString()); // 6/18/2025, 4:53:33 PM      


let newDate = new Date(2025,5,18); // zero based indexing for month
console.log(newDate.toDateString()); // Wed Jun 18 2025

let anotherDate = new Date("2025-06-18"); // here one based indexing for month
console.log(anotherDate.toDateString()); // Wed Jun 18 2025

let birthDate = new Date("10-02-2002"); // MM/DD/YYYY
console.log(`My date of birth is ${birthDate.toDateString()}`);

/*++++++++++++++++++++++++++++Time Stamp++++++++++++++++++++++++++++++++++ */

let time = Date.now();
console.log(time); // 1750246342962 => miliseconds from 01/01/1970
console.log(newDate.getTime()); // 1750185000000 time between newDate and 01/01/1970 in miliseconds

// Getting time in seconds
console.log(Math.floor(Date.now()/1000)); // 1750246647
console.log(Math.floor(Date.now()/3600000)); // 486179 in hourse