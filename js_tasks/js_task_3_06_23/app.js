import Car from './CarClass.js'
import Motorcycle  from './MotorcycleClass.js';

const carModel = new Car('GM', 'Mustang', 2020);
const motorcycle = new Motorcycle('GM', 'Mustang', 2020, 4)

console.log(motorcycle.getWheelsNumber());
console.log(carModel.getIntroduction());
console.log(carModel.getAge());
