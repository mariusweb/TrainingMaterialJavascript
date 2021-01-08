(function(){
    let submitBtn = document.querySelector("#btn");
    let givenNumber = document.querySelector(".form-control");
    let progresLine = document.querySelector(".progress-bar");

    
})();

let randomNr = Math.floor(Math.random() * 100) + 1;
submitBtn.addEventListener('click', function(e){
    let number = document.getElementById("number").value;
    console.log(randomNr);
    console.log(+number);
    if(+number == randomNr){
        rezultText.innerHTML = `Your guess is right ${number}`;
        
    }else if(+number > randomNr){
        rezultText.innerHTML = `The guessed number is smaller!`;
    }
    else if(+number < randomNr){
        
        rezultText.innerHTML = `The guessed number is bigger!`;
    }
    numberOfGuesses = ++numberOfGuesses;
    rezultNumber.innerHTML = `${numberOfGuesses} guesses was done`;
});
