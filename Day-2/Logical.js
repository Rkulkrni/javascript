
// Logical operator=>

// 1)Logical and AND (&&)=>

// [T , T => T]
// [T , F => F]
// [F , T => F]
// [F , F => F]

var a= 22>5;  //true
var b= 21>8;  //true
console.log(a&&b); //true
//---------------------------
var a= 22<5;  //false
var b= 21>8;  //true
console.log(a&&b); //false
//---------------------------
var a= 22>5;  //true
var b= 21<8;  //false
console.log(a&&b); //false
//---------------------------
var a= 22<5;  //false
var b= 21<8;  //false
console.log(a&&b); //false
//---------------------------
var age=20;
 if (age >= 18 && age<=22) {console.log('you are eligible')}
 
 //---------------------------------------------------------------------------------------------------------------------

// 2) logical OR (||)
// [T , T => T]
// [T , F => T]
// [F , T => T]
// [F , F => F]

var a=15<25; //true
var b=10<28;  //true
console.log (a||b)  //True
//--------------------------
var a=15<25; //true
var b=10<8;  //false
console.log (a||b)  //True
//---------------------------
var a=15>25; //false
var b=10>8;  //true
console.log (a||b)  //True
//---------------------------
var a=15>25; //false
var b=10<8;  //false
console.log (a||b)  //false

//---------------------------------------------------------------------------------------------------------------------
// 3) Logical NOT (!)
// [T => F]
// [F => T]

var x="pune";
var y="pune";
console.log (x!=y); //false
//-------------------------------
var x="pune";
var y="mumbai";
console.log (x!=y); //true
//---------------------------------------------------------------------------------------------------------------------




