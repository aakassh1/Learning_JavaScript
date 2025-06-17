let name = "Aakash";
let age = 23;

console.log(name+" "+age);

// Use backticks(``) and $ for string interpolation
console.log(`Hello, I am ${name} and I am ${age} years old.`);

// String decleration using object
let email = new String("aakash@gmail.com");
console.log(email);

console.log(email.length);
console.log(email.toUpperCase()); // It will not change original string
console.log(email);

console.log(email.charAt(6));

console.log(email.indexOf('h'));

console.log(email.substring(0,5));

let str = email.slice(-1,4);
console.log(str);

str = "     Aakash    ";
console.log(str);
console.log(str.trim());

let url = "https://www.google.com/js%20notes";

console.log(url.replace("%20","-"));

let word = "Aakash is a good boy";

console.log(word.split(' '));