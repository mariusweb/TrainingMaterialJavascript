(function(){
    function Book(name, author, releseDate, pageNumber, priceEur){
        this.name = name;
        this.author = author;
        this.releseDate = releseDate;
        this.pageNumber = pageNumber;
        this.priceEur = priceEur;
    }
    let theLastWish = new Book("The Last Wish" ,"Andrzej Sapkowski", "1992", 288, 11.15);
    let someBook = new Book("Short Book" ,"unknown", "2019", 99, 5.0);
    let theSwordOfDestiny = new Book("The sword of destiny" ,"Andrzej Sapkowski", "1993", 384, 12.15);
    let theBloodOfElves = new Book("The blood of elves" ,"Andrzej Sapkowski", "1994", 320, 12.00);
    let arrOfBooks = [theLastWish, theSwordOfDestiny, theBloodOfElves, someBook];

    function printAll(arr){
        console.log(arr);
    }
    printAll(arrOfBooks);
    function addTenPersent(arr){
        arr.map((book) => {
            book.priceEur = book.priceEur + (book.priceEur * 0.1);
        });
        return arr;
    }
    console.log(addTenPersent(arrOfBooks));
    function filterBooks(arr){
        return arr.filter(book => book.pageNumber > 100);
    }
    console.log(filterBooks(arrOfBooks));
}());

