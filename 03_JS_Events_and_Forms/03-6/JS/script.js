
let select = document.getElementById('id_of_select');
let button = document.getElementById('btn');
let body = document.querySelector('body')
let selected = 0;

button.addEventListener('click', function(e){
    selected = select.value;
    if(selected == 1){
        body.classList.remove('body2');
        body.classList.remove('body3');
        body.classList.remove('body4');
        body.classList.add('body1');
    }else if(selected == 2){
        body.classList.remove('body1');
        body.classList.remove('body3');
        body.classList.remove('body4');
        body.classList.add('body2');
    }else if(selected == 3){
        body.classList.remove('body2');
        body.classList.remove('body1');
        body.classList.remove('body4');
        body.classList.add('body3');
    }else if(selected == 4){
        body.classList.remove('body2');
        body.classList.remove('body3');
        body.classList.remove('body1');
        body.classList.add('body4');
    }
});


