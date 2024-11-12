// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array

function addNew() {
    stuname = prompt("Enter the name what do you want?")
    roster.push(stuname)    
}


// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
 function removename() {
    rname = prompt("Enter name what you want remove?")
        roster.remove(rname)    
 }

// DISPLAY ROSTER

// Create a function called display that prints out the orster to the console.

function display(){
    console.log(roster)
}


// Start by asking if they want to use the web app

start = prompt("If you want to start web app press 'y'")
task = "empty"

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
if (start == "y") {

    while (task != 'quit'){
    task  = prompt("enter what task you perform for adding press 'add' for removing 'remove' for display 'display' for quit 'quit'") 

    if (task === 'addNew'){
        addNew()
    }else if (task === 'remove') {
        removename()        
    }else if (task === 'display' ){
        display()
    }
    
}  
}
alert("Thanks for using the web app")
