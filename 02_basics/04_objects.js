// Declaring object as singleton

const tinderUser = new Object();

tinderUser.id = "asc123";
tinderUser.name = "Roshan";
tinderUser.isLogedin = true;

console.log(tinderUser);

// Declaring objects inside object

const user = {
    id: 123,
    fullName: {
        firstName: "Aakash",
        lastName: "Singh",
    },
    email: "aakash@gmail.com",
}

console.log(user.email);
console.log(user.id);
console.log(user.fullName.firstName);
console.log(user.fullName.lastName);


// Merging two objects
const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

let obj3 = {obj1,obj2}; // It will insert object in another object

console.log(obj3);

// It will merge two objects into third one
obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

const obj4 = {...obj1,...obj2}; // Spreading objects into third
console.log(obj4);

console.log(Object.keys(tinderUser));// Returns object of keys of object
console.log(Object.values(tinderUser)); // Returns object of values of object
console.log(Object.entries(tinderUser)); // Return key value pairs in array inside array

console.log(tinderUser.hasOwnProperty("name")); // Checks weather the object contains this value
console.log(tinderUser.hasOwnProperty("none")); 