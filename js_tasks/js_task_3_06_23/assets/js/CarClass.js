class Car {
    constructor(maker, model, year) {
        this.maker = maker;
        this.model = model;
        this.year = year;
    }

    getIntroduction() {
        return `Maker:${this.maker} Model:${this.model}`
    }

    getAge(){
        const date = new Date();
        const year = date.getFullYear();
        return ((year - this.year) <= 10) ? '10 metų arba naujesnis' : '11 metų arba senesnis';
    }
}

export default Car;

