x = 0;
while(x<5){
    console.log("x is currently:"+x);
    if(x===3){
        console.log("X is equal to 3");
        break;
    }
    console.log("x is still less than 5, adding 1 to x");
    x = x+1;
}

// print even numbers betweeen 1 to 11

var num = 1;

while( num<11) {
    if (num % 2 ===0) {
    console.log(num);        
    }    
    num = num+1;
}
