// Testuosime šį masyvą
let numbers = [5, 1, 7, 2, -9, 8, 2, 7, 9, 4, -5, 2, -6, -4, 6];
// 1. Parašykite funkciją arrDoubled, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš 2;

let DoubletArr = [];

function arrDoubled(numbersArr) {
  numbersArr.forEach(element => {
    DoubletArr.push(element * 2)
  });
  return DoubletArr;
}

console.log(arrDoubled(numbers));


// 2. Parašykite funkciją arrMultiplied, kuri sukuria ir grąžina naują masyvą, kurio elementai padauginti iš argumentu nurodyto skaičiaus

let MultipliedletArr = [];

function arrMultiplied(numbersArr, multiplier) {
  numbersArr.forEach(element => {
    MultipliedletArr.push(element * multiplier)
  });
  return MultipliedletArr;
}

console.log(arrMultiplied(numbers, 4));

// 3. Parašykite funkciją arrCountTwos, kuri suskaičiuoja dvejetus masyve

let twoCount = 0;

function arrCountTwos(numbersArr) {

  numbersArr.forEach(element => {
    if (element == 2) {
      twoCount++
    }
  })
  return twoCount;
}

console.log(arrCountTwos(numbers));

// 4. Parašykite funkciją arrIndexOfFirst, kuri grąžintu pirmo surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.


let isNumber = (element) => element == 22222;

function arrIndexOfFirst(numbersArr) {

  console.log(numbersArr.findIndex(isNumber));

}

arrIndexOfFirst(numbers);


// 5. Parašykite funkciją arrIndexOfLast, kuri grąžintu paskutinio surasto, argumentu nurodyto skaičiaus, indeksą masyve. Jei skaičius nerastas funkcija turi grąžinti -1.


isNumber = 2;

function arrIndexOfLast(numbersArr) {

  console.log(numbersArr.lastIndexOf(isNumber));

}

arrIndexOfLast(numbers);

// 6. Parašykite funkciją reverseNumbers, kuri pakeis skaičius vietomis taip, kad pirmas skaičius taps paskutiniu, antras piešpaskutiniu, o buvęs paskutinis taps pirmu, priešpaskutinis bus antru.
// Pvz.: Turime skaičius 32243;
// Iškvietus funkciją rezultata bus: 34223

isNumber = 12345

function reverseNumbers(numbers) {
  return String(numbers).split("").reverse().join("");
}

console.log("Reverse number : " + reverseNumbers(isNumber));



// 7. Parašykite  funkciją, kuri kaip argumentą priims skaičių masyvą ir suras atitinkamai mažiausią ir didžiausią skaičių bei juos grąžins.
// Pvz.: Turime masyvą: [8,5,4,2,7,1,9]
// Iškvietus funkciją rezultata bus: "Mažiausas: 1, Didžiausas: 9"

function maxMinFromArray(numbersArr) {

  return 'min ' + Math.min(...numbersArr) + ', ' + 'max ' + Math.max(...numbersArr);

}

console.log(maxMinFromArray(numbers));

// 8. Parašykite  funkciją checkForLetters, kuri priims du argumentus: Pirmas argumentas bus sakinys (arba žodžiai (-is)) ir antras argumentas bus raidė (kaip string). Funkcija turės suskaičiuoti kiek pirmu agrumentu nurodytame sakinyje/žodžiuose(-yje) yra antru argumentu nurodytų raidžių ir gražinti tų raidžių sumą su sakiniu pvz.: “Raidė “v” sakinyje rasta 4 kartus”.

let sentence = 'Labas kaip tau sekasi';

function char_count(str, letter) {
  let letter_Count = 0;
  for (let position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return `Raidė "${letter}" sakinyje rasta ${letter_Count} kartus`
}

console.log(char_count(sentence, 'a'));

// 9. Parašykite funckiją, kuri ras visus skaičius esančius msyve ir gražins juos kaip atsikrą masyvą. Naujame masyve visi skaičiai bus surikiuoti nuo mažiausio iki didžiausio.
let arr2 = [8, 'Hello', 'click', 'u', 7, 4, 'a', 'a', 3, 6, "chair", , 10, 1];
// Iškvietus funkciją rezultata bus: [1,3,4,6,7,8,10];

let numbersFromMixedArr = []

function foundNumbersinArr(mixedArr) {

  mixedArr.forEach(element => {
    if (!isNaN(element)) {
      numbersFromMixedArr.push(element)
    }
  });

  return numbersFromMixedArr.sort((a, b) => a - b);

}

console.log(foundNumbersinArr(arr2));



// 10. Sukurkite funkciję checkIfAllSmaller(arr, max), BE MASYVO METODŲ, kuri patikrintų ar visi skaičiai masyve yra didesni negu perduota reikšmė max;
let arr1 = [3, 3, 6, 9, 5];
// Iškvietus funkciją checkIfAllSmaller(arr1, 5) rezultata bus: False

let bigerNumbersCount = 0;

function checkIfAllSmaller(arr, max) {
  arr.forEach(element => {
    if (element > max) {
      bigerNumbersCount++
    }
  });
  if (bigerNumbersCount == arr.length) {
    return true
  } return false
}

console.log(checkIfAllSmaller(arr1, 3));

// 11. Parašykite funkciją filteredByLetter, kuri turi du parametrus: 1. masyvas; 2. raidė. Funkcija sukuria ir grąžina naują masyvą, kuriame yra visi masyvo, nurodyto kaip pirmas parametras elemntai, kuriuose galima rasti antru paramatetru nurodytą raidę.
// Testuosime šį masyvą
let citiesOfLithuania = [
  'Vilnius',
  'Kaunas',
  'Klaipėda',
  'Šiauliai',
  'Panevėžys',
  'Alytus',
  'Marijampolė',
  'Mažeikiai',
  'Jonava',
  'Utena',
];

let filteredCities = [];

function filteredByLetter(arr, letter) {

  arr.forEach(element => {
    if (element.indexOf(letter) !== -1 || element.indexOf(letter.toUpperCase()) !== -1) {
      filteredCities.push(element);
    }
  });
  return filteredCities;
}

console.log(filteredByLetter(citiesOfLithuania, 'v'));



// 12. Parašykite penkias funkcijas:
// - calculateValue()
// - addition()
// - subtraction()
// - multiplication()
// - division()

// Pagridinė funkcija bus calculateValue(num1, num2, action), kuri priims tris argumentus: a) num1 - skaičius;b) num2 - skaičius; c) action - (matematinis veiksmas kaip string pvz. “substraction”). Būtina, kad funckija validuotų ar num1 ir num2 yra skaičiai.

// Priklausomai trečio argumento (action), su pirmais dviem (num1 ir num2) bus atliekamas matematinis veiksmas ir kviečiama viena iš keturių funkcijų, kurios priims du argumentus (num1 ir num2) ir grąžins atlikta veiksmą.

// Pastaba: šios funkcijos: addition(), subtraction(), multiplication(), division() turi būti kviečiamas calculateValue() viduje, o aprašomos išorėje.


const addition = (num1, num2) => num1 + num2;


const multiplication = (num1, num2) => num1 * num2;

const subtraction = (num1, num2) => num1 - num2;

const division = (num1, num2) => num1 / num2;

function calculateValue(num1, num2, action) {

  if (!isNaN(num1) && !isNaN(num2)) {

    if (action == 'addition') {
      return addition(num1, num2);
    } else if (action == 'multiplication') {
      return multiplication(num1, num2);
    } else if (action == 'subtraction') {
      return subtraction(num1, num2);
    } else if (action == 'division') {
      return division(num1, num2);
    } else {
      return 402
    }
  } return 404

}


console.log(calculateValue(2, 2, 'division'));
