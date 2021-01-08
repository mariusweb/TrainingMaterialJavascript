let p = document.querySelector(".p-class");
let pRed = document.querySelector(".btn-danger");
let pGreen = document.querySelector(".btn-success");
let pYellow = document.querySelector(".btn-warning");

pRed.addEventListener("click", function(){
    p.classList.add("text-danger");
    p.classList.remove("text-success");
    p.classList.remove("text-warning");
});
pGreen.addEventListener("click", function(){
    p.classList.add("text-success");
    p.classList.remove("text-warning");
    p.classList.remove("text-danger");
})
pYellow.addEventListener("click", function(){
    p.classList.add("text-warning");
    p.classList.remove("text-success");
    p.classList.remove("text-danger");
})