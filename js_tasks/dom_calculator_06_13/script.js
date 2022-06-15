let inputNumber = document.getElementById('inputnumber');
const resultValue = document.getElementById('result');
const buttonSum = document.getElementById('sum');
const buttonMinus = document.getElementById('minus');
const buttonMultiplay = document.getElementById('multiplay');
const buttonDivide = document.getElementById('divide');
const buttonReset = document.getElementById('reset');

let numberFirst = 0;

function calculateReset() {
  inputNumber.value = '0'
  numberFirst = 0
  document.getElementById('result').textContent = '';
}

function calculatePlus() {
  if(isNaN(inputNumber.value)){
    resultValue.textContent = 'Įveskite skaičių'
  }else{
    let newInputinField = Number(inputNumber.value);
    numberFirst += newInputinField;
    resultValue.textContent = numberFirst;
  }
}

function calculateMinus() {
  if(isNaN(inputNumber.value)){
    resultValue.textContent = 'Įveskite skaičių'
  }else{
    let newInputinField = inputNumber.value;
    numberFirst -= newInputinField;
    resultValue.textContent = numberFirst;
  }
}

function calculateMultiplay() {
  if(isNaN(inputNumber.value)){
    resultValue.textContent = 'Įveskite skaičių'
  }else{
    let newInputinField = Number(inputNumber.value);
    if (numberFirst == 0) {
      numberFirst = newInputinField;
      resultValue.textContent = newInputinField;
    } else {
      numberFirst *= newInputinField;
      resultValue.textContent = numberFirst;
    }
  }
}

function calculateDivide() {
  if(isNaN(inputNumber.value)){
    resultValue.textContent = 'Įveskite skaičių'
  }else{
    let newInputinField = Number(inputNumber.value);
    if (numberFirst == 0) {
      if (newInputinField == 0){
        resultValue.textContent = 'Dalyba iš nulio negalima'
      }else {
        numberFirst = newInputinField;
        resultValue.textContent = newInputinField;
      }

    } else {
      numberFirst /= newInputinField;
      resultValue.textContent = numberFirst;
    }
  }
}

buttonReset?.addEventListener('click', calculateReset);
buttonSum?.addEventListener('click', calculatePlus);
buttonMinus?.addEventListener('click', calculateMinus);
buttonMultiplay?.addEventListener('click', calculateMultiplay);
buttonDivide?.addEventListener('click', calculateDivide);




