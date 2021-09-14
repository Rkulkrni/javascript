var test1= 20;
var test2=20.5;
var test3=4*5+5+6;

// Method 1 (typeof):

console.log(typeof(test1));
console.log(typeof(test2));
console.log(typeof(test3));

// Method 2 (valueOf):

console.log(test1.valueOf());
console.log(test3.valueOf());
console.log(test2.valueOf());

// Method 3 (toString):

var test4=test1.toString();
console.log(test4);
console.log(test1==test4);
console.log(test1===test4);

var test5=1+2+5+'3'+5+6;
console.log(test5);
console.log(typeof(test5));

var test6=1+'5'-6+5;
console.log(test6);
console.log(typeof(test6));

var test7= 2+5+'4'-3+4;
console.log(test7);
console.log(typeof(test7));

var test8=3+4+'5'*2*3;
console.log(test8);
console.log(typeof(test8));

var test9=3+4+'pune'+(4+8)
console.log(test9);

// Method 4 (NaN):

var test10='e'*'e';
console.log(test10);