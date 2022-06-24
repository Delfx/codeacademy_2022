import Car from './CarClass.js'

// const vehicle = new Car(maker);

class Motorcycle extends Car {
    constructor(maker, model, year, wheels) {
        super(maker, model, year);
        this.wheels = +wheels
    }

    getWheelsNumber() {
        if (this.wheels == 3) {
            return 'motociklas turi 3 ratus'
        } else if (this.wheels == 2) {
            return 'motociklas turi 2 ratus'
        }else{
            return 'Keistas aparatas'
        }
    }

}

export default Motorcycle