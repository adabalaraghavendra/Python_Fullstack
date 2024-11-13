
// Grab the header with h1

var header = document.querySelector("h1")

//change the header color

//header.style.color = 'red'

//change the color every secound

function randomcolor(){
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i=0;i < 6; i++){
        color  += letters[Math.floor(Math.random()*16)]
    }
    return color
}


function changeHeaderColor(){
    color = randomcolor()
    header.style.color = color
}

// change color every secound
setInterval("changeHeaderColor()",500)