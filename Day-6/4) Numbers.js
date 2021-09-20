
// Number data type =>
//------------------------------------------------------------------------------------------------------------------
var test1= 20;
var test2=20.5;
var test3=4*5+5+6;

//-----------------------------------------
//following are the methods available :
//-----------------------------------------
// 1) typeof:

console.log(typeof(test1));
console.log(typeof(test2));
console.log(typeof(test3));
//-----------------------------------------
var test5=1+2+5+'3'+5+6;
console.log(test5);
console.log(typeof(test5));
//-----------------------------------------
var test6=1+'5'-6+5;
console.log(test6);
console.log(typeof(test6));

//-------------------------------------------------------------------------------------------------------------------
// 2) valueOf:

console.log(test1.valueOf());
console.log(test3.valueOf());
console.log(test2.valueOf());

//--------------------------------------------------------------------------------------------------------------------
// 3) toString:

var test4=test1.toString();
console.log(test4);
//-------------------------------
var test8=3+4+'5'*2*3;
var test9=test8.toString();
console.log(test9);

//---------------------------------------------------------------------------------------------------------------------
// 4) NaN:

var test10='e'*'e';
console.log(test10);