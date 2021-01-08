let image = document.querySelector("img");
let parent = document.querySelector(".border");
let beforeP = document.querySelector(".before");

let left = document.querySelector(".btn-primary");
let right = document.querySelector(".btn-secondary");
let hide = document.querySelector(".btn-success");
let down = document.querySelector(".btn-danger");
let repair = document.querySelector(".btn-warning");


left.addEventListener("click", function(){
    image.classList.add("float-right");
    image.classList.remove("float-left");
    parent.classList.remove("flex-column");
    parent.classList.remove("d-flex");
    image.classList.remove("d-none");
})
right.addEventListener("click", function(){
    image.classList.add("float-left");
    image.classList.remove("float-right");
    parent.classList.remove("flex-column");
    parent.classList.remove("d-flex");
    image.classList.remove("d-none");
})
hide.addEventListener("click", function(){
    image.classList.add("d-none");
})
down.addEventListener("click", function(){
    image.remove();
    parent.append(image);
    image.classList.remove("d-none");
})
repair.addEventListener("click", function(){
    image.remove();
    parent.insertBefore(image, beforeP);
    image.classList.remove("float-left");
    image.classList.remove("float-right");
    image.classList.remove("d-none");
})
