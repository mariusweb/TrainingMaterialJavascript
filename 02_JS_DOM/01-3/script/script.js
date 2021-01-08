let image = document.querySelector("img");

let color = document.querySelector(".btn-success");
let dark = document.querySelector(".btn-dark");


dark.addEventListener("click", function(){
    image.classList.add("dark");
})
color.addEventListener("click", function(){
    image.classList.remove("dark");
    
})