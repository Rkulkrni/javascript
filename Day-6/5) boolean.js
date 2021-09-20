
// boolean data type=>
//=> It is primitive data type and having only two values i.e true or false
//=> it useful in controlling program flow using conditional statement like if else,switch,while
//--------------------------------------------------------------------------------------------------------------------
var a=10;
var b=5;
var c= a<b;
console.log(c);

//-------------------------------------
//following are the methods in boolean:
//-------------------------------------
// 1) typeOf => This will show which type of data type.
console.log(typeof(c));

//-------------------------------------
// 2) toString => It returns string of boolean
var test1=true;
console.log(test1);
console.log(test1.toString());
//-------------------------------------
console.log(c.toString());
//-------------------------------------
// 3) valueOf=> Returns the value of boolean
let x=10;
let y=6;
let z=x<y;
console.log(z.valueOf());