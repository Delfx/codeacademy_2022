class MovieClass {
    constructor(name, year, director, budget, income) {
        this.name = name;
        this.year = year;
        this.director = director;
        this.budget = budget;
        this.income = income;
    }

    getIntroduction() {
        return `Movie title: ${this.name}, Release date: ${this.year}, Director: ${this.director}`
    }

    getProfit(){
        let profit = this.income - this.budget

        return `${profit} million USD`
    }
}