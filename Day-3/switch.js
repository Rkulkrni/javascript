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




//ex-2

var age =21;

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
