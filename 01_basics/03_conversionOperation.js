let score = 33;

console.log(typeof score);
console.log(typeof(score));

let marks = "33";
console.log(typeof marks);

let valueInNumber = Number(marks); // Number() will convert the number in string formate to integer formate
console.log(valueInNumber); // 33
console.log(typeof valueInNumber); // number

let result = "234 Percent";
console.log(result);

let resltInNumber = Number(result);
console.log(resltInNumber); // NaN => Not a Number
console.log(typeof resltInNumber); // number

let check = null;
console.log(check);

let checkInNumber = Number(check);
console.log(checkInNumber); // 0
console.log(typeof checkInNumber); // number

let email;
console.log(email);

let emailInNumber = Number(email);
console.log(emailInNumber); // NaN
console.log(typeof emailInNumber); // number

// "33" => 33
// "33ac" => NaN
// true => 1; false => 0;
// undefined => NaN
// Null => 0;

let age = 12;

let ageInBoolean = Boolean(12);
console.log(ageInBoolean); // true
console.log(typeof ageInBoolean); // boolean

let city = "";

let cityInBoolean = Boolean(city);
console.log(cityInBoolean); // false
console.log(typeof cityInBoolean); // boolean


let num = 45;
console.log(num);

let numInString = String(num);
console.log(numInString); // "45"
console.log(typeof numInString); // string
