
// What is callback=> callback is function passed into another function as an argument to execute later

// console.log('first execution')

// setTimeout(() => {
//     // console.log ("I will print after 3 sec")
    
// }, 3000);

                    //Example -1
      function demo() {
          console.log("This is first demo");
      }              

      function demo2 (callback){  //defined callback parameter
          callback();              //callback calls here
      }
      demo2(demo); //now execution will start from demo2 and demo2 has one parameter i.e call back
                    // callback asked for the argument in this case "demo" is played role of argument and that function will run op. it called as callback fun.


                    //example => 2

var test1 = function demo1 () {  
        console.log("This is first message"); 

}

var test2 = function demo2 (exm) {
            exm();
            console.log("This is second message");
}
test2(test1); //test2-> exm-=> asking for argument=>test1 arg provided=>go to test1=>console message will print

                        //Example=> 3
  
 function test4 (add){
     console.log ("India is country" + " " + add);
 }
 function test5(callback){
    var add= "and it has 30 states";
    callback(add);
 }
test5(test4);// =>test5=>callback parameter asked for argm=>test4 argm provided=>goto test4
                    //=>var add provided=>in console asking add=>message will print.

                    // Example=> 4

 function test10 (a){
     console.log ("Hundred=" + a);
 }
 function test11(a, callback){
    callback(a);
 }
test11(100 ,test10);


                        // Example => 5
                                              
  function fun2 (callback){
     var first=7;
     callback(first);
  }
   fun2( function (first) {
        console.log ("There are"+ " " + first +" "+"wonders in the world")
        });

//There are two type of callback:=>

// 1) Synchronous :=>
// It execute line by line code and wait until next operation performs.

 var test1 = function demo1 () {   
        
         console.log ("This is first message");     
 }

 var test2 = function demo2 () {
    console.log ("This is second message");
}
test2();
test1();



// 2) Asynchronous :=>
// It is also execute line by line code but do't wait for each operation rather it execute all operation in first attempt.
                        
var test1 = function demo1 () {
    
    setTimeout(() => {
        console.log("This is first message ")   
    }, 3000);
}

var test2 = function demo2 () {
    console.log("This is second message")
}
test1();
test2();



// Example => 2

// var number = [1,2,4,25,1,13,12,4,7,8,9];
//  function oddNumber (number){     // oddNumber is call back function and passing into filter
//      return number % 2;
//  }
//  var oddNumber = number.filter(oddNumber);
//  console.log(oddNumber);
