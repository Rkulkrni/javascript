/*switch case:=> 

switch is a conditional statement like if statement. 
Switch is useful when want to execute one of the multiple code blocks based */
var day=3;
switch (day) {
    case 0:
    console.log("today is sunday")
    break; 

    case 1:
    console.log("today is monday")
    break;

    case 2:
    console.log("today is tueday")
    break;

    case 3:
    console.log("today is wensday")
    break;

    case 4:
    console.log("today is thursday")
    break;

    case 5:
    console.log("today is friday")
    break;

    case 6:
    console.log("today is saturday")
    break;

    default:
    console.log ("plz enter valid day")
}
//-----------------ex-2----------------------------------
//=> in this case switch expression is provided condition true or false. 
var age =27;
switch (true){
    case (age >=18 && age<=30):
    console.log("congrats you are eligible");

    break;

    case (age >=30 && age<=40):
    console.log("Sorry you are not eligible");

    break;
    default:
        console.log("Enter valid age")
}
//----------------ex-3----------------------------------------

var operation = 4
var a=10
var b=10

switch (operation){
        case 1:
        console.log(a+b);
        break;
        
        case 2:
        console.log(a-b);
        break;
        
        case 3:
        console.log(a*b);
        break;
        
        case 4:
        console.log(a/b);
        break;
        
        case 5:
        console.log(a%b);
        break;
        default:
        console.log("Enter valid operation")
}


// Write, Edit and Run your Javascript code using JS Online Compiler
    
let x, y, res, ch

console.log("Enter 1 For Addition:")
console.log("Enter 2 For Subtraction:")
console.log("Enter 3 For Multiplication:")
console.log("Enter 4 For Division :")
console.log("Enter 5 For Modulus :")
ch = parseInt(prompt("Enter your choice:"));

if (ch > 0 && ch < 6) {
    x = parseInt(prompt("Enter first number"));
    y = parseInt(prompt("Enter second number"));
}

switch (ch) {
    case 1:
        res = x + y;
        console.log("\nResult is :" + res)
        break

    case 2:
        res = x - y
        console.log("\nResult is :" + res)
        break

    case 3:
        res = x * y
        console.log("\nResult is :" + res)
        break

    case 4:
        res = x / y
        console.log("\nResult is :" + res)
        break

    case 5:
        res = x % y;
        console.log("\nResult is :" + res)
        break

    default:
        console.log("Invalid Choice:" + ch)
}


