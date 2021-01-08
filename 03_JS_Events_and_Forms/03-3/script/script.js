
let heightCm;
let weight;
let heightM;

let submitBtn = document.querySelector(".btn");
let rezultText = document.querySelector("#kmi");

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    heightCm = +document.querySelector('input[name=height]').value;
    heightM = Math.pow((heightCm / 100), 2);
    weight = +document.querySelector('input[name=weight]').value;
    rezultText.innerHTML = `Jūsų KMI yra ${(weight / heightM).toFixed(2)}`;
});
