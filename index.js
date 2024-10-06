let clear = document.getElementById("cl");
let text = document.querySelector(".inp");
let del = document.getElementById("del")
let number = document.getElementById("num");
let operation = document.getElementById("op");
let output = document.getElementById("equ");

clear.onclick= function(){
    text.value = "";
}

del.onclick= function(){
    text.value = text.value.slice(0 , -1);
}

function display(n){
text.value +=n;
}

function out() {
    try {
        text.value = eval(text.value);
    }
    catch(err) {
        text.value ="error";
    }
}