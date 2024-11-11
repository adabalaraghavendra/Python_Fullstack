var ham = 10;
var cheese =10;
var report = "blank";

if (ham >= 10 && cheese >= 10) {
    report = "ham and cheese solid sales"    
}else if(ham === 0 && cheese ===0){
    report = "Nothing Solid!"
}else{
    report = "We had some sales of items"
}
console.log(report);