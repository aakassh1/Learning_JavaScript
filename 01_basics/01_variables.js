const accNo = 32112;
let accEmail = "aakash4680s@gmail.com";
var accPassword = "12321";
accCity = "Ghaziabad";
let accState;

// accNo = 5; Not Allowed
console.log(accNo);

accEmail = "singhakash9812@gmail.com";
console.log(accEmail);

accPassword = "32123";
console.log(accPassword);

accCity = "Delhi";
console.log(accCity);

console.table([accNo,accEmail,accPassword,accCity]);

let accName = "Aakash";

/*
    Never use var because it will create 
    same name variable even in same scope
*/
var accPassword = "UP";

console.table([accName,accPassword,accState]);


