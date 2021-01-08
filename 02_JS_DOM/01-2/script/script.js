
let image = document.querySelector("img");

let big = document.querySelector(".btn-success");
let small = document.querySelector(".btn-warning");


big.addEventListener("click", function(){
    image.classList.add("w-50");
    image.classList.remove("w-25");
    
})
small.addEventListener("click", function(){
    image.classList.add("w-25");
    image.classList.remove("w-50");
    
})