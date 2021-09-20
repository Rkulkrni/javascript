
// Following are the comparison operator in js=>
// 1) Equals to => 

var a=5;
var b=10;
console.log(a=b);

//---------------------------------------------------------------------------------------------------------------------
// 2) DOUBLE Equals to => only comparing for value not for data type

var a=10;
var b='10';
console.log(a==b);
//--------ex-2------------
var a=10;
var b=9;
var c= (a==b);
console.log (c);
//--------ex-3------------
var a='Pune';
var b='mumbai';
console.log(a==b);
//--------ex-4------------
var a=10;
var b=10;
var c= (a==b);
console.log (c);

//---------------------------------------------------------------------------------------------------------------------
// 3) NOT equals to => it check value are equal or not

var a=12;
var b=12;
console.log(a!=b);
//-------ex-2--------------
var a=12;
var b="12";
console.log(a!=b);
//--------ex-3--------------
var a=12;
var b=15;
console.log(a!=b);
//-------ex-4---------------
var a=12;
var b=12;
console.log(a!==b);

//---------------------------------------------------------------------------------------------------------------------
//TRIPLE Equals to (===) => It compare both data type and value

var a=10;
var b=10;
console.log(a===b); //data type and value both are same
//-----------------------
var a=10;
var b='10';
console.log(a===b); //values are same but data type is different
//------------------------
var a='pune';
var b='pune';
console.log(a===b); //value as well as data type are same

//---------------------------------------------------------------------------------------------------------------------
//GREATER THAN 

console.log(12>5);

console.log(12>25);

//---------------------------------------------------------------------------------------------------------------------
//GREATER THAN Equals to

console.log(12>=5);

console.log(12>=16);

//---------------------------------------------------------------------------------------------------------------------
//LESS THAN 

console.log (12<5);

console.log (12<25);

console.log (12<=25);
//---------------------------------------------------------------------------------------------------------------------


