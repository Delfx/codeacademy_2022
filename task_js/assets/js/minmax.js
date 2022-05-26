function getRandomFloat(min, max, decimals) {
    const str = (Math.random() * (max - min) + min).toFixed(decimals);

    return parseFloat(str);
}


let a = getRandomFloat(1, 10, 2)
let b = getRandomFloat(1, 10, 2)
let c = getRandomFloat(1, 10, 2)
let d = getRandomFloat(1, 10, 2)
let e = getRandomFloat(1, 10, 2)

let numbers = [a, b, c, d, e];


console.log(numbers)

console.log(Math.min.apply(Math, numbers));
console.log(Math.max.apply(Math, numbers));




