(function(){
    let form = document.querySelector("form");

    let submitBtn = document.querySelector("#btn");
    let rezultText = document.querySelector("#resultText");
    let rezultNumber = document.querySelector("#resultCount");
    
    let numberOfGuesses = 0;
    let randomNr = Math.floor(Math.random() * 100) + 1;
    let biggerNumber = [];
    let smallerNumber = [];
    let addBigNummbers = (numberBig) => {
        biggerNumber.push(numberBig);
    }
    let addSmallNummbers = (numberSmall) => {
        smallerNumber.push(numberSmall);
    }
    submitBtn.addEventListener('click', function(e){
        let number = +document.getElementById("number").value;
        e.preventDefault();
        if(number == randomNr){
            rezultText.innerHTML = `Your guess is right ${number}`;
            console.log(JSON.parse(localStorage.getItem('bigger')));
            console.log(JSON.parse(localStorage.getItem('smaller')));
        }else if(number > randomNr){
            rezultText.innerHTML = `The guessed number is smaller!`;
            addBigNummbers(number);
            localStorage.setItem('bigger', JSON.stringify(biggerNumber));
        }
        else if(number < randomNr){
            rezultText.innerHTML = `The guessed number is bigger!`;
            addSmallNummbers(number);
            localStorage.setItem('smaller', JSON.stringify(smallerNumber));
        }
       
        numberOfGuesses = ++numberOfGuesses;
        rezultNumber.innerHTML = `${numberOfGuesses} guesses was done`;
        
    });
    
}());

