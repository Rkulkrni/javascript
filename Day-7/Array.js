/* Array =>array is a single variable that is used to store different elements */

//---------------------------------------------------------------------------------------------------------------------
var test1 = ['virat', 'MSD','Rohit','Hardik','Bumrah','Bhuvi','SirJadeja','Yuvi','Viru'];
// console.log(test1);
// console.log(test1[3]); //op is hardik count start from 0
// console.log(typeof(test1[3])); //op is string
// console.log(typeof(test1)); //array type of is object
// console.log(test1.length); //total length is 9

/*-------------------------------------
  following are the methods in string:
---------------------------------------*/

// 1) Push ==> it will add one element in array at last
var test2 = test1.push('Zahir');
console.log(test2); //only op is updated length
console.log(test1); //return value in new array

//-------------------------------------------------------------------------------------------------------------------
// 2) pop ==> it will remove last element from array
var test3 = test1.pop();
console.log(test3);
//-----------------------------------
var test4 = test1.pop('Rohit'); //no impact on result last element removed 
console.log(test4);

//------------------------------------------------------------------------------------------------------------------
// 3) Unshift ==> It will add element at first
var test5 = test1.unshift('Zahir');
console.log(test5);
console.log(test1);

// -----------------------------------------------------------------------------------------------------------------
// 4) Shift ==> It will remove first element
var test6 = test1.shift('MSD'); //no impact on op first element removed
console.log(test6);
console.log(test1);

//--------------------------------------------------------------------------------------------------------------------
// 5) Slice ==> separate element from array start index, end index-1
var test7 = test1.slice(2,5);
console.log(test7);
//--------------------------------------
var test8 = test1.slice(1,6);
console.log(test8);

//-----------------------------------------------------------------------------------------------------------------
// 6) Splice ==> start from index and then how many element to be removed and add new element in that place.
var test11 = test1.splice(0,3,'Dhawan','Nehra','Gambhir');
console.log(test11);
//----------------------------------------
var test10 = test1.splice(2,5);
console.log(test10);
//----------------------------------------
var test9= test1.splice(2,5);
console.log(test9);

//-----------------------------------------------------------------------------------------------------------------
// 7) Join==> This will convert array into string
//Split==> will convert string into array
var test11 = test1.join();
console.log(test11);

//--------------------------------------------------------------------------------------------------------------------
// 8) Concat ==> connect two array and op is new array
var test12 = ['ashwin','Harbhajan'];
var test13 = test1.concat(test12);
console.log(test13);
console.log(test1);

//--------------------------------------------------------------------------------------------------------------------
// 9) Reverse ==> it will reverse array element order
var test14 = test1.reverse();
console.log(test14);

//----------------------------------------------------------------------------------------------------------------------
// 10) Combination of split and reverse ==> this string convert into array, reverse order then convert into string
var test15 = 'Claver coder india'   // This is imp regarding interview
var test16 = test15.split(' ').reverse().join(); //=>string into array=>reverse=>convert array into string
console.log(test16);

//------------------------------------------------------------------------------------------------------------------------
// 11) toString ==> convert array to string
var test16 = test1.reverse()
test17= test16.toString();
console.log(test17);

//------------------------------------------------------------------------------------------------------------------------
// 12) Map ==> help to various operation on element of array
var test17= [1,2,3,4,5,6];
var test18= test17.map(item=> item /2*3>5);
console.log(test18);
//--------------------------------------------
var arr= [3,6,4,7,15,4,2];
 function binary (num){
     return num.toString(2);
 }
var output = arr.map(binary);
console.log(output);

//-----------------------------------------------------------------------------------------------------------------------
// 13) Filter ==> perform the operation and return with new those satisfy the condition. 
var test18= test17.filter(item=> item>4);
console.log(test18);
//---------------------------------------------
var test19 = test17.filter (item=> item>=3);
console.log(test19);
//---------------------------------------------  
var test17= [1,2,3,4,5,6,11,25,12,45];
var test19 = test17.filter (item=> item % 2 ==1); //this will filter only odd number
console.log(test19);
//---------------------------------------------
var test17= [1,2,3,4,5,6,11,25,12,45];
var test19 = test17.filter (item=> item % 2 ==0); //this will filter only even number
console.log(test19);

//------------------------------------------------------------------------------------------------------------------------
// 14) Reduce=>
// to reduce an array to a single value
//code explain--> 1st call,  acc=0, curr=1 =>1
//                1st call,  acc=1, curr=2 =>3 
//                1st call,  acc=3, curr=3 =>6
let numbers = [1, 2, 3];

let sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sum); 

//-----------------------------------------------
var test17= [1,2,3,4,5,6,11,25,12,45]; 
var test20= test17.reduce(function(res,item){
    // console.log(`test17:${item} | res:${res} `)
    return res+item
},0);
console.log(test20);

//-----------------------------------------------------------------------------------------------------------------------
//More clarity on map & reduce

// //map=>
// var arr= [3,6,4,7,15,4,2];
//  function binary (num){
//      return num.toString(2);
//  }
// var output = arr.map(binary);
// console.log(output);
// //------------------------------------
//  function double (num){
//      return num*2;
//  }
// var output= arr.map(double);
// console.log(output);
// //----------------------------------------
// function odd (num){
//     return (num % 2==0);
// }
// var output = arr.map(odd);
// console.log(output);
// //-----------------------------------------

// var input=(arr)=>{

//     return ("Array is tripled="+' '+ arr*3);
// }
// var output= arr.map(input);
// console.log(output);


