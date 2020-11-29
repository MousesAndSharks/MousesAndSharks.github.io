var vidtxt = document.getElementById('vid.txt.js');
var titleColor = "black";
var close = document.getElementById('myClose');
var content = document.getElementById('myContent')
var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
document.getElementById('jsinfo').style.color = "blue";

vidtxt.onclick = function() {
    if(titleColor == "black"){
        vidtxt.style.color = "blue";
        titleColor = "blue";
    }else{
        vidtxt.style.color = "";
        titleColor = "black";
    }
}

function opacity1(){
    content.style.opacity = "1" 
}


button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 1000);
}

function displayNone() {
    modal.style.display = "none";
}

close.onclick = function () {
    content.style.opacity = "0";
    setTimeout(displayNone, 1000);
}