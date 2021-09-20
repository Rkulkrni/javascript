
// Object => object hold multiple values in the term of properties and method.
//        => It is non-primitive data type : 
//--------------------------------------------------------------------------------------------------------------------
// 1) simple object:=>

var test = {
    name : 'virat',
    Runs : 154,
    balls : 89,
    role : 'Batsman',
};
console.log (test);
//-------------------------------------
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

//---------------------------------------------------------------------------------------------------------------------
// Create a single object, with the keyword new.
// 2) New Keyword
var test2 = new Object();
test2.name = 'Rohit'
test2.Runs = 213;
test2.Balls = 89;
test2.Role = 'all rounder'
console.log(test2);

//---------------------------------------------------------------------------------------------------------------------
// 3) Object.create
var test3 = Object.create ({name:'Jadeja',Runs:78, Role:'All rounder' });
test3.Balls = 27;
console.log(test3.__proto__);

//----------------------------------------------------------------------------------------------------------------------
// 4) object.assign
var test4 = {fname:'Yuvi'};
var test5 = {Runs:50};
var test6 = {Balls:21}
var test7 = Object.assign(test4,test5,test6);
console.log(test7);
//---------------------------------------------------------------------------------------------------------------------

// this method => to access the object method can use this keyword
 var person = {
     fname : "virat",
     lname : "kohali",
     age : 30,
     Runs : 101,   
    fullname : function (){
     return this.fname + ' '+ this.lname + ' '+this.Runs;
 }
    }
 console.log (person.fullname());
//---------------------------------------------------------------------------------------------------------------------

