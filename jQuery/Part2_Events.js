
//on click

$("h1").click(function(){
    console.log("There was click")
})


$('li').click(function(){
    console.log("Click on any li")
})

//Using this key

$('h3').click(function(){
    $(this).text("I was changed")
})

//KeyPress

$('input').eq(0).keypress(function(){
   $('h3').toggleClass("turnRed")
})


$('input').eq(0).keypress(function(event){
    console.log(event)
})

$('input').eq(0).keypress(function(event){
    if(event.which === 13){
        $('h2').toggleClass("turnRed")
    }
})


// ON() function

//on() baically works like addEventListener()
$('input').on("dblclick",function(){
    $('h1').addClass('turnBlue')
})

$("li").on("mouseenter",function(){
    $(this).toggleClass('trunedRed')
})


//Effects and animations

$('input').eq(1).val("Fade Out Everythig")

$('input').eq(1).on("click",function(){
    //$(".container").fadeOut(3000)
})

$('input').eq(1).on("click",function(){
    $(".container").slideUp(5000)
})