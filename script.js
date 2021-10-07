var display;
var displayStr = "";
var displayHeight;

var user;

var fontSize = 56;

window.onload = function() {
    display = document.getElementById("display");
    user = document.getElementById("user");
    setDisplayHeight();
}

window.onresize = function() {
    setDisplayHeight();
}

function setDisplayHeight() {
    displayHeight = Math.ceil(window.innerHeight / fontSize);
}

function updateUser(ele) {
    user.innerHTML = ele.value;
}

function submit(ele) {
    displayStr += '\n<span style="color: #ef767a">'+ele.value+'</span>';
    ele.value = "";
    user.innerHTML = "";
    
    if(countOf(displayStr, '\n') > displayHeight)
        displayStr = snipTop(displayStr);
        
    display.innerHTML = displayStr;    
}

function snipTop(str) {
    return str.substring(str.indexOf("\n")+1);
}
    
function countOf(str, char) {
    return str.split(char).length-1;
}