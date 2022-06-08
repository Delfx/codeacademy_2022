// function plusplus(a, b) {

//     if (a == (a + b)) {
//         return a
//     }
//     a++
//     b--
//     return plusplus(a, b);

// }

// console.log(plusplus(3, 3));



// function sumOfDigits(number) {

//     let output = [],
//         sNumber = number.toString();

//     if (a == 0) {
//         return a;
//     }
//     a.split

//     return sumOfDigits(number)
// }



// function sumDigits(number) {

//     console.log(strlength);

//     if(strlength == 0 ){
//         return 0
//     }else{
//         arraylength+1
//         strlength-1
//     }


//     console.log(strlength--);
//     sum += str[arraylength];


//     console.log(sum += str[arraylength]);

//     return sumDigits(sum)


//     strlength--
//     console.log(strlength);
//     return sumDigits(sum += parseInt(str.charAt(strlength), 10));
// }

// console.log(sumDigits(123));

// console.log(Math.floor(1/10));




// let cities = ["Vilnius", "Kaunas", "Klaipėda", "Šiauliai", "Panevėžys", "Marijampolė"];

// function getFavoriteCity(name, surname, city) {
//     let user = `${name} ${surname}`;
//     let favoriteCity = city;
//     return `${user} favorite city is ${favoriteCity}`;
// }

// let getFavoriteCity = (name, surname, city) => `${name} ${surname} favorite city is ${city}`;








function recurtion(numb) {

    return (numb === 0) ? 0 : numb % 10 + (Math.floor(numb / 10))

}

console.log(recurtion(22));