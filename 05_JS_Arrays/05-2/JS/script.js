(function(){
    let form = document.querySelector(".container");
    let submitBtn = document.querySelector("#btn");
    let rezultTextValue = document.querySelector("#resultText").innerHTML;
    let rezultText = document.querySelector("#resultText");
    let selectOption = document.querySelector("#money");
    let number;
    let selectOptionValue;
    let green;
    let red;
    let finalMoney;
    let moneyTransferGreen = JSON.parse(localStorage.getItem('green')) || [0];
    let moneyTransferRed = JSON.parse(localStorage.getItem('red')) || [0];
    
    window.addEventListener('DOMContentLoaded', (e) => {
        e.preventDefault();
            localStorage.setItem('red', JSON.stringify(moneyTransferRed));
            localStorage.setItem('green', JSON.stringify(moneyTransferGreen));
        
        showResultValue();
        
    });

    let addMoneyTransfer = (numberBig, bool) => {
        if(bool == 'true'){
            moneyTransferGreen.push(numberBig);
            form.classList.remove('border-success', 'border-danger');
            form.classList.add('border-success');
            localStorage.setItem('green', JSON.stringify(moneyTransferGreen));
        }else if(bool == 'false'){
            moneyTransferRed.push(numberBig);
            form.classList.remove('border-success', 'border-danger');
            form.classList.add('border-danger');
            localStorage.setItem('red', JSON.stringify(moneyTransferRed));
        }
    }

    function sumOfAllMoney(moneyGreen) {
        return moneyGreen.reduce((a, b) => a + b, 0);
    }

    let greenAndRedFilterAndSort = (greenArr, redArr, sum) => {
        let filteredSum =  [...greenArr, ...redArr].filter((moneyTransfer) => {
            return moneyTransfer > sum;
        });
        localStorage.setItem('filter', JSON.stringify(filteredSum));
        let sortedSum =  [...greenArr, ...redArr].sort((moneyTransfer, second) => {
            return moneyTransfer - second;
        });
        localStorage.setItem('sort', JSON.stringify(sortedSum));
    }

    function showResultValue ()  {
        green = JSON.parse(localStorage.getItem('green'));
        red = JSON.parse(localStorage.getItem('red'));
        
        finalMoney = ` ${sumOfAllMoney(green) - sumOfAllMoney(red)} Eur.`;
        let newTextRezult = rezultTextValue.concat(finalMoney);
        
        rezultText.innerHTML = newTextRezult;
    }
    

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        number = +document.getElementById("number").value;
        selectOptionValue = selectOption.options[selectOption.selectedIndex].value;
        addMoneyTransfer(number, selectOptionValue);
        greenAndRedFilterAndSort(green, red, number);
        document.getElementById("number").value = "";
        showResultValue();
    });

    
    
}());

