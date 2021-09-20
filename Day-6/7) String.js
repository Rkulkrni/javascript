// String=>

var test1="India is my country"
console.log(test1);

// --------------------------------------------------------------------------------------------------------------------
//1) typeof
console.log(typeof(test1));

// --------------------------------------------------------------------------------------------------------------------
//2) valueOf
console.log(test1.valueOf());

// --------------------------------------------------------------------------------------------------------------------
//3) charAt= spot the character start counting from 0
var test2=test1.charAt(7);
console.log(test2);
//-------------------------------
var test2=test1.charAt(10);
console.log(test2);
//-------------------------------
var test2=test1.charAt(3);
console.log(test2);
//-------------------------------
var test2=test1.charAt(25); //will op black space
console.log(test2);

// --------------------------------------------------------------------------------------------------------------------
//4) length = op is lenth of string
console.log(test1.length);

// --------------------------------------------------------------------------------------------------------------------
//5) charCodeAt= op is Ascii code of char.
test3=test1.charCodeAt(7);
console.log(test3);
//------------------------------
test3=test1.charCodeAt(10);
console.log(test3);
//------------------------------
test3=test1.charCodeAt(3);
console.log(test3);
//------------------------------
test3=test1.charCodeAt(25);
console.log(test3); //will op NaN

// --------------------------------------------------------------------------------------------------------------------
//6) concatenation => It connect two string
var test4= test1+' satyamev jayate';
console.log(test4);

// --------------------------------------------------------------------------------------------------------------------
//7) indexOf
// start counting from 0
// search value not found then return -1
var test5=test1.indexOf('India');
console.log(test5);
//---------------------------------------
var test5=test1.indexOf('my');
console.log(test5);
//---------------------------------------
var test5=test1.indexOf('canada');
console.log(test5);
//---------------------------------------
var test5=test1.indexOf('cou');
console.log(test5);
//---------------------------------------
var test5=test1.indexOf('dia');
console.log(test5);

//---------------------------------------------------------------------------------------------------------------------
// //8) Replace
//not matched then string will return as it is.
var test6=test1.replace('she','your'); 
console.log(test6);
//-------------------------------------------
var test6=test1.replace('country','motherland');
console.log(test6);

// --------------------------------------------------------------------------------------------------------------------
//9) Search=> 
//this will return with started index
// If value not found return with -1

var test7=test1.search('my');
console.log(test7);
//------------------------------------
var test7=test1.search('our'); //op is -1 char not found
console.log(test7);

// --------------------------------------------------------------------------------------------------------------------
//10) Slice= start index, end index
var test8=test1.slice(6,8);
console.log(test8);
//------------------------------------
var test8=test1.slice(10,30);
console.log(test8);
//------------------------------------
var test8=test1.slice(1,8);
console.log(test8);

// --------------------------------------------------------------------------------------------------------------------
//11) Split = op is new array but provided condition removed from this array
var test9=test1.split('co');
console.log(test9);
//-------------------------------------
var test9=test1.split('my');
console.log(test9);

// --------------------------------------------------------------------------------------------------------------------
//12) Substr= start index and length char in between 
var test10=test1.substr(5,9);
console.log(test10);
//----------------------------------------
var test10=test1.substr(3,8);
console.log(test10);

// --------------------------------------------------------------------------------------------------------------------
//13) Uppercase
var test11=test1.toUpperCase();
console.log(test11);
//----------------------------------------
var test11=test1.toUpperCase(5,9);
console.log(test11); //all char converted in uppercase
// --------------------------------------------------------------------------------------------------------------------