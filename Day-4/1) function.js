
//FUNCTIONS=>
// function allow us to define block of code, naming it and execute as many time as we req.
//-------------------------------------------------------------------------------------------------------------

// There are two types:=>

/*  1) Build in function or events 
    2) User defined function */
   
//---------------------------------------------------------------------------------------------------------------------
// 1) simple function
function test(){
    console.log("Hi. good morning");
}
test();
//--------------------------------------
function txt(){
    let x= 10
    let y= 7
    let z= x+y;
    console.log("The addition of two number is="+(z));
}
txt();
//---------------------------------------------------------------------------------------------------------------------
// 2) FUNCTIONS WITH PARAMETER

function add (a,b){
    var c=a+b
    console.log(c)
}
add (10,5)
//--------------------------------------
function div (a,b){
    var c=a/b
    console.log(c)
}
div (10,5)
//--------------------------------------
function test2 (fname, lname){
    console.log(fname + lname);
}
test2("rahul");

//---------------------------------------------------------------------------------------------------------------------
//FUNCTION WITH RETURN VALUE

function sum (ind, eng, usa){
    var total=(ind+eng+usa);
    return(total);
}
sum(20,12,31);
console.log(total);
//------------------------------------------------
function square (num){   
    var temp= num*num;
    
    return (temp);
}
var ans=square(15);
console.log("Square is" + ans);


//---------------------------------------------------------------------------------------------------------------------