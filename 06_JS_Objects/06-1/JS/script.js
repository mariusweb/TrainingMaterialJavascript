(function(){
    let restoranas = {
        pavadinimas: "Double Pizza",
        vietuSkaicius: 12,
        rezervuotuVietuSkaicius: 0,
        rezervuotiVieta: function () {
            if (this.rezervuotuVietuSkaicius < this.vietuSkaicius){
                this.rezervuotuVietuSkaicius += 1;
            }else{
                alert("vietu nera");
            }
        },
        atsauktiVieta: function () {
            if(this.rezervuotuVietuSkaicius > 0){
                this.rezervuotuVietuSkaicius -= 1;
            }else{
                alert("Vietu ir taip nulis");
            }
        }
    }
    console.log(restoranas.rezervuotuVietuSkaicius);
    restoranas.rezervuotiVieta()
    console.log(restoranas.rezervuotiVieta());
    console.log(restoranas.rezervuotuVietuSkaicius);
    console.log(restoranas.atsauktiVieta());
    restoranas.atsauktiVieta()
    console.log(restoranas.rezervuotuVietuSkaicius);
    restoranas.atsauktiVieta()

}());

