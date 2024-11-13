var restart = document.querySelector("#b")


var box = document.querySelectorAll("td")

function clearBoard() {
    for (var i =0;i < box.length;i++){
        box[i].textContent = "";
    }
}

restart.addEventListener("click",clearBoard)

function changeMarker(){
    if(this.textContent === ""){
        this.textContent = "X"
    }else if(this.textContent === "X"){
        this.textContent = "O"
    }else{
        this.textContent = ""
    }
}

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click",changeMarker);
    
}