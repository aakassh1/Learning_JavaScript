/*
    Data Types: Used to specify which kind or which type of data will be stored on 
                particular memeory  location
    
    Types of Data Types: On basis of storing data and giving access
    1. Primitive: Call By Value type data 
    2. Non Primitive: Call By Reference type data

    * Primitive Data Type: These are call by value type data their reference is not given while working
                            only their copies are given for perfomring operations
    
    There are 7 types of Primitive type data:
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt

    * Non Primitive or Reference Type data: These are call by reference type data their reference are given
                                            while performing operations
    
    There are 3 types of Non Primitive type data:
    1. Array
    2. Object
    3. Functions

*/

/***********************************Memory Management**********************************/

/**
 * Memory is divided in two parts
 * 1. Stack : Used to store primitive type data
 * 2. Heap : Used to store non primitive type data
 */

let name = "Aakash";
let myName = name; // Here passing the name to myName but only copy of name or value of name
                   // will be passed to myName instead of reference 

myName = "Krishna";

console.log(name); // Aakash => as we are changing myName if it will be passed by reference then
                   // changes would be reflect in name also but here it will reflect in myName only 

console.log(myName); // Krishna

let user1 = {
    userName: "aakash_o1",
    password: "Aakash@123"
};

let user2 = user1 /**  Now here user2 will be refering same object as user1 is refereing in heap memory
                       Changes made by any one reference variable will be made for both
                  */  
user1.password = "Krishna@123";

console.log(user1); // Krishna@123
console.log(user2); // Krishna@123