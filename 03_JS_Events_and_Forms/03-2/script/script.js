
let firstNumber;
let secondNumber;

let submitBtn = document.querySelector(".btn");
let rezultText = document.querySelector("#sum");

submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    firstNumber = +document.querySelector('input[name=firstNumber]').value;
    secondNumber = +document.querySelector('input[name=secondNumber]').value;
    rezultText.innerHTML = `${firstNumber + secondNumber}`;
    
});
