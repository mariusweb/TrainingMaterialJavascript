
let clickImg = document.querySelectorAll(".img-thumbnail");
let fullImgDiv = document.querySelector(".full-img");
let fullImg = document.createElement("IMG");
fullImg.classList.add("col");

clickImg.forEach(img => {
    img.addEventListener('click', function(e){
        e.preventDefault();
        fullImg.src = img.src;
        console.log(fullImg.src);
        fullImgDiv.append(fullImg);
    });
});

