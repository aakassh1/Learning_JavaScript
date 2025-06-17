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


/*************************************Operations****************************************/

let a = 23;
let nega = -a;
console.log(nega); //-23


// String Concatenation
let s1 = "Aakash";
let s2 = " Singh";
let s3 = s1+s2;
console.log(s3); // Aakash Singh

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2); //122
console.log(1+1+"1"+2+2); //2122
console.log(1+2+"2"); //32


console.log(1+2+"12"+(1+2+3)); //3126

console.log(true); // true
console.log(+true); // 1
console.log(+""); //0

let cnt = 100;
console.log(cnt++); // 100
console.log(cnt); //101
console.log(++cnt); //102