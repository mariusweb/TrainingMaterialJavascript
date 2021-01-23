(function(){
    let cardImg = document.querySelector('.card-img-top');
    let cardName = document.querySelector('.card-title');
    let location = document.querySelector('.location');
    let age = document.querySelector('.age');
    let email = document.querySelector('.email');
    let phone = document.querySelector('.phone');
    let button = document.querySelector('.btn');

    button.addEventListener('click', (e) =>{
        e.preventDefault();
        window.location.reload();
    })

    async function getUsers(){
        let response = await fetch(
            'https://randomuser.me/api/'
        );
        let userData = await response.json();
        return userData;
    }
    getUsers().then(usersDataAndInfo => {
        usersDataAndInfo.results.map(userData => {
            console.log(userData);
            cardName.innerHTML = `Name: ${userData.name.first}`;
            cardImg.src = userData.picture.large;
            location.innerHTML = `Location: ${userData.location.city}`;
            age.innerHTML = `Age: ${userData.dob.age}`;
            email.innerHTML = `Email: ${userData.email}`;
            phone.innerHTML = `Phone: ${userData.phone}`;
        })
    });

}());

