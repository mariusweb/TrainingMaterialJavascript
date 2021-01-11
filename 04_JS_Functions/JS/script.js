(function(){
    let submitBtn = document.querySelector("#btn");
    let givenNumber = document.querySelector(".form-control");
    let progresLine = document.querySelector(".progress-bar");

    let remuveAndSetAttribute = (setNumber) => {
        let infoSuccess = ['bg-success', 'bg-info'];
        let dangerSuccess = ['bg-success', 'bg-danger'];
        let dangerInfo = ['bg-info', 'bg-danger'];
        if(setNumber <= 39 && setNumber >= 0){
            progresLine.classList.add('bg-danger');
            if(progresLine.classList.contains(...infoSuccess)){
                progresLine.classList.remove(...infoSuccess);
                
            }
            
        }else if(setNumber <= 69 && setNumber >= 40){
            progresLine.classList.add('bg-info');
            if(progresLine.classList.contains(...dangerSuccess)){
                progresLine.classList.remove(...dangerSuccess);
            }
            
        }else if(setNumber <= 100 && setNumber >= 70){
            progresLine.classList.add('bg-success');
            if(progresLine.classList.contains(...dangerInfo)){
                progresLine.classList.remove(...dangerInfo);
                
            }
            
        }
        progresLine.removeAttribute('aria-valuenow');
        progresLine.removeAttribute('style');
        progresLine.setAttribute('aria-valuenow', setNumber);
        progresLine.setAttribute('style', `width: ${setNumber}%`);

    }
    let clickToSubmitProgres = (inputDiv) =>{
        console.log(inputDiv.value);
        remuveAndSetAttribute(inputDiv.value);
    }
    submitBtn.addEventListener('click', () => {clickToSubmitProgres(givenNumber)});
})();

