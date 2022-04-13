const title = document.querySelector(".title ");
        

function hi(){
    title.style.color = "magenta";
}
function entermouse() {
    title.innerText = "바보!";
}
function leavemouse() {
    title.innerText = "박태건";
}
function changeWebColor () {
    document.body.style.backgroundColor = "maroon";
}
function copysomething() {
    alert("You copied!");
}
function pastesomething(){
    alert("you pasted!");
}

    title.addEventListener("click" , hi );
    title.addEventListener("mouseenter" , entermouse);
    title.addEventListener("mouseleave" , leavemouse);
    
    window.addEventListener("resize" , changeWebColor);
    window.addEventListener("copy" , copysomething);
    window.addEventListener("paste" , pastesomething);