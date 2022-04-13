// const h1 = document.querySelector("h1");

// function somethingclick(){
//     const easy = "active"
//     if(h1.className === easy) {
//         h1.className = "" ;
//     } else {
//         h1.className = easy
//     }
    
// }

//     h1.addEventListener("click" , somethingclick );


const fafa = document.querySelector("h1");
function clickChange() {
    fafa.classList.toggle("active");
}


fafa.addEventListener("click" , clickChange);
