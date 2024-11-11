
var namecon = null;
var petcon = null;
var agecon = null;
var heightcon = null;

var Firstname = prompt("Enter your first name");
var Lastname = prompt("Enter your Last name");
var age = prompt("Enter your age");
var height = prompt("What is your height");
var petname = prompt("What is your pet name");
alert("Thank you so much for the information");

if (Firstname[0] === Lastname[0]) {
    namecon = true;    
}else{
    namecon = false;
}

if (age>20 && age<30) {
    agecon = true;
}else{
    agecon = false;
}

if (height >= 170) {
    heightcon = true;
}else{
    heightcon = false;
}
    
if (petname[petname.length-1] === "y") {
    petcon = true;    
} else {
    petcon = false;
}

if (namecon && agecon && heightcon && petcon) {
      console.log("Welcome SPY!");
}else{
    console.log("Nothing to see here");
}