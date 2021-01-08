let parent = document.querySelector(".border");
let image = document.querySelector("img");

let ok = document.querySelector(".btn-success");

let articleName = document.createElement("h1");
articleName.innerHTML = `Pavadinimas`;

ok.addEventListener("click", function(){
    parent.prepend(articleName);
    
});



