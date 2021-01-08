
let texts = document.querySelectorAll('.lead');

texts.forEach(text => {
    text.addEventListener('focus', function(e){
        text.classList.add('lead1');
    });
    text.addEventListener('blur', e => {
        text.classList.remove('lead1');
      });
});


