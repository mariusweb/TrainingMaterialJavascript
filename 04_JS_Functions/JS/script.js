(function(){
    let submitBtn = document.querySelector("#btn");
    let givenNumber = document.querySelector(".form-control");
    let progresLine = document.querySelector(".progress-bar");

    let remuveAndSetAttribute = (setNumber) => {
        let infoSuccessDanger = ['bg-success', 'bg-info', 'bg-danger'];
        if(setNumber <= 39 && setNumber >= 0){
            progresLine.classList.remove(...infoSuccessDanger);
            progresLine.classList.add('bg-danger');
            
        }else if(setNumber <= 69 && setNumber >= 40){
            progresLine.classList.remove(...infoSuccessDanger);
            progresLine.classList.add('bg-info');
            
        }else if(setNumber <= 100 && setNumber >= 70){
            progresLine.classList.remove(...infoSuccessDanger);
            progresLine.classList.add('bg-success');
            
        }
        progresLine.removeAttribute('aria-valuenow');
        progresLine.removeAttribute('style');
        progresLine.setAttribute('aria-valuenow', setNumber);
        progresLine.setAttribute('style', `width: ${setNumber}%`);

    }
    let clickToSubmitProgres = (inputDiv) =>{
        remuveAndSetAttribute(inputDiv.value);
    }
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        clickToSubmitProgres(givenNumber);
        givenNumber.value = "";
    });
})();

