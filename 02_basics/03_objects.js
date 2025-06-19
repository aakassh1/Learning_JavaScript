/**
 *  Object: Object in JavaScript are collection of properties where each property is defined
 *          as key and a corresponding value
 *          It is created in two ways 
 *          1. Singleton            2. Literals
 * 
 *  Singleton: When objects are created using constructor 
 *  
 *  Literal: When objects are created using literals 
 *
 */

// Inserting symbol data type into the object

let mySym = Symbol("key1");

const jsUser = {
    name: "Aakash", // key is considered as string by default
    age: 23,
    "email id": "aakash@gmail.com", // This value cannot be accessed using *jsUser.email id*
    city: "Ghaziabad",
    [mySym]: "myKey1",
}

// Accessin elements of object
console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["email id"]);

console.log(jsUser[mySym]);
console.log(typeof jsUser[mySym]);

// Modifying the elements of object
jsUser.city = "Delhi";
console.log(jsUser);

// We can lock the object by which values will not be allowed to change of object
//Object.freeze(jsUser);

jsUser.city = "Ghaziabad";
console.log(jsUser);

// Functions in JavaScript

jsUser.greeting = function(){
    console.log("Hello Aakash");
}

console.log(jsUser.greeting); // [Function (anonymous)]
console.log(jsUser.greeting());

jsUser.greeting2 = function(){
    console.log(`Good Evening ${this.name}`);
}

console.log(jsUser.greeting2());