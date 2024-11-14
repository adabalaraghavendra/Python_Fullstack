
var play1 = prompt("Enter the player one name,you will be pink")
var play1color = 'rgb(255, 0, 0)'

var play2 = prompt("Enter secound player name,you will be blue ")
var play2color= 'rgb(0, 0, 255)'

var game_on = true
var table = $("table tr")

function reportWin(rowNum,colNum) {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}

//change the chip color
function changeColor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
  }

//Report back to current color of chip
function returnColor(rowIndex,colIndex) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
  }

//Bottom row
function checkBottom(colIndex) {
    var colorReport = returnColor(5,colIndex);
    for (var row = 5; row > -1; row--) {
      colorReport = returnColor(row,colIndex);
      if (colorReport === 'rgb(128, 128, 128)') {
        return row
      }
    }
  }

//Check 4 inputs are same color
function colorMatchCheck(one,two,three,four){
  return (one===two && one===three && one===four && one !=='rgb(128, 128, 128)' && one !== undefined) 
   
}

//Check for Horizontal Wins
function horizantalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for(var col =0; col<4;col++){
            if(colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3))){
                console.log('horiz')
                reportWin(row,col)
                return true
            }else{
                continue
            }

        }
        
    }
    
}

//Check for Vertical Wins
function verticalWinCheck(){
    for (var col =0; col < 7; col++){
        for (var row =0;row <3; row++){
            if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
                reportWin(row,col)
                return true
            }else{
                continue
            }
        }
    }
}

// Checkfor Diagonal Wins
function diagonalWinCheck(){
    for (var col =0;col <5;col++){
        for(var row =0;row<7;row++){
            if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3))){
                console.log('diag')
                reportWin(row,col)
                return true
            }else if(colorMatchCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3))){
               console.log('diag')
               reportWin(row,col)
               return true
            }
            else{
                continue
            }
        }
    }
}


//Game End
function gameEnd(winningPlayer){
    for(var col =0;col <7;col++){
        for(var row = 0;row<7;row++){
            $('h3').fadeOut('fast')
            $('h2').fadeOut('fast')
            $('h1').text(winningPlayer+" has won! Refresh your browser to play again!")

        }
    }
}
//Start with Player One
var currentPlayer = 1
var currentName = play1
var currentColor = play1color

$('h3').text(play1+":it is your turn,please pick a column to deop your pink chip")

$('.board button').on('click',function(){
    // what column was chosen
    var col = $(this).closest('td').index()
    

    //Get back to bottom avaiable row to change
    var bottomAvail = checkBottom(col);
    //console.log(bottomAvail)

    //drop the chip in bottom
    changeColor(bottomAvail,col,currentColor)

    //Check for a win or a tie
    if(horizantalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
        gameEnd(currentName)
    }
     //If no win or tie,continue to next player
     currentPlayer = currentPlayer * -1

     //Re-Check who the current Player is.
    if(currentPlayer ===1){
        currentName = play1
        $('h3').text(currentName+":it is your turn,please pick a column to deop your pink chip")
        currentColor = play1color
    }else{
        currentName = play2
        $('h3').text(currentName+"it is your turn,please pick a column to deop your blue chip")
        currentColor = play2color
    }
})