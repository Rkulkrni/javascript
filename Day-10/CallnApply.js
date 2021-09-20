//call => This method comma separated arguments
var stud = {
    fName:'Alex',
    lName: 'Simi',
    age: 15,
    getFullName: function(){
        var fullNm = this.fName +' '+ this.lName
        console.log(fullNm);
    }   
}

stud.getFullName();

console.log(stud.fName);

var getHobbies = function(){
    console.log(this.getFullName() +'is haing hobbies like ' + this.hobby1 + this.hobby2);
}
getHobbies('swimming', 'watching movies');

getHobbies.call(stud, 'swimming', 'watching movies');

//-------------------------------------------------------------------------------------------------------------
// apply => This method takes the array of arguments.
    
var stud = {
    fName:'Alex',
    lName: 'Simi',
    age: 15,
    getFullName: function(){
        var fullNm = this.fName +' '+ this.lName
        console.log(fullNm);
    }   
}

stud.getFullName();

console.log(stud.fName);

var getHobbies = function(){
    console.log(this.getFullName() +'is haing hobbies like ' + this.hobby1 + this.hobby2);
}
getHobbies('swimming', 'watching movies');

getHobbies.call(stud, 'swimming', 'watching movies');
getHobbies.apply(stud, ['swimming', 'watching movies']); 
        