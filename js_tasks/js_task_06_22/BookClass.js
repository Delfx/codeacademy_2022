class BookClas {

    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }


    bookAuthorYear(){
        return 'Book name: ' + this.name + ' Author: ' + this.author
    }

    bookHowOld (){
        let date = new Date();
        return  (date.getFullYear() - this.year)
    }


}