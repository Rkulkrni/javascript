// Primitive values : has NO method or properties
//A primitive data type is data that has a primitive value.
// Types of primitive data types : string,number,boolean,null,undefined
// Types of non-primitive data types : object,array

// Create a single object=> using an object literal.

var test = {
    name : 'virat',
    Runs : 154,
    balls : 89,
    role : 'Batsman',
};
console.log (test);

var test1 = {};
test1.name = "MSD";
test1.Runs = 189;
test1.Balls = 120;
test1.role = 'captain'
test1.achievement = function(){
    console.log("He won all icc events");
}
console.log(test1);
console.log(test1.achievement());

