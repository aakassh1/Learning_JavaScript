console.log(2>=1); // true

console.log("2">1); // true => "2" will be converted into to 2
                    // and then it will be compared with 1

console.log("02">=1); // true => same

/* Note: Always make sure that 
         comparison should be perfomed on same data types
*/

console.log(null > 0); // false
console.log(null==0); // false
console.log(null<0); // false
console.log(null>=0); // true =? check(==) and comparison(<,>,=<,=>) 
                      // works differently comparison converts null to 0
                      // number and then check


// Strict check: == vs ===
console.log("2"==2); // true => checks only details or content not the data types
console.log("2"===2); // false => checks data type along with the content

