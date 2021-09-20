
//miscellaneous operators=>

// 1) TYPEOF operators

console.log(typeof ("pune"));

console.log(typeof(3));

console.log(typeof('5'));

//---------------------------------------------------------------------------------------------------------------------
// 2) conditional/Ternary operators=> it is provide condition 

function paper (){
    let mark = 40
    let result = (mark >= 40)? 'Pass':'Fail'
    console.log(result);
}
paper ();
//-------------------------------------------------------
function paper2 (){
    var mark = 81
    var result = (mark < 40)? "Grade-C":
                 (mark < 60)? "Grade-B":
                 (mark < 80)? "Grade-A":"Grade-A+";                 
                 console.log(result);
}
paper2 ()
//--------------------------------------------------------
// var a=10;
// var b;
// (a == 50)? b= "true" : b= "false";
// console.log(b); //false
//-------------------------------------------
// var a=10;
// var b;
// (a == 10)? b= "true" : b= "false";
// console.log(b); //True
//--------------------------------------------
// var a=100;
// var b=200;
// var c;
// c=(a>b)? "true":"false"
// console.log(c)
//---------------------------------------------
// var a=100;
// var b=100;
// var c;
// c=(a===b)? "true":"false"
// console.log(c)
// //---------------------------------------------
// var a=100;
// var b=200;
// var c;
// c=(a&&b)? "true":"false"
// console.log(c)
// //---------------------------------------------
// var a=2;
// var b=3;
// var c;
// c=(a||b)? "true":"false"
// console.log(c)

//---------------------------------------------------------------------------------------------------------------------