var headone = document.querySelector('#one')
var headtwo = document.querySelector('#two')
var headthree = document.querySelector('#three')

//Hover

headone.addEventListener('mouseover',function(){
    headone.textcontent = "Mouse over"
    headone.style.color = "red" 
})

headone.addEventListener("mouseout",function(){
    headone.textContent = "Mouse Not on me"
    headone.style.color = "blue"
})

//ON Click

headtwo.addEventListener("click",function(){
    headtwo.textcontent = "I clicked "
    headtwo.style.color = "blue"
})

//Dpuble Click

headthree.addEventListener("dblclick",function(){
    headthree.textContent = "Double Clicked"
    headthree.style.color = "red"
})