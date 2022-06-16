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

function calculatePlus(newInputinField) {
    numberFirst += newInputinField;
    resultValue.textContent = numberFirst;
  }

function calculateMinus(newInputinField) {
    numberFirst -= newInputinField;
    resultValue.textContent = numberFirst;
  }

function calculateMultiplay(newInputinField) {
    if (numberFirst == 0) {
      numberFirst = newInputinField;
      resultValue.textContent = newInputinField;
    } else {
      numberFirst *= newInputinField;
      resultValue.textContent = numberFirst;
    }
  }

function calculateDivide(newInputinField) {
    if (numberFirst == 0) {
      if (newInputinField == 0) {
        resultValue.textContent = 'Dalyba iš nulio negalima'
      } else {
        numberFirst = newInputinField;
        resultValue.textContent = newInputinField;
      }

    } else {
      numberFirst /= newInputinField;
      resultValue.textContent = numberFirst;
    }
  }

function doCal(event) {
  if (isNaN(inputNumber.value)) {
    resultValue.textContent = 'Įveskite skaičių'
  } else {
    let newInputinField = Number(inputNumber.value);
    window[event.target.getAttribute('data-type-cal')](newInputinField)
    console.log(event.target);
  }
}

document.querySelectorAll('button[data-type-cal]').forEach(e => e.addEventListener('click', doCal));
buttonReset?.addEventListener('click', calculateReset);

// buttonSum?.addEventListener('click', calculatePlus);
// buttonMinus?.addEventListener('click', calculateMinus);
// buttonMultiplay?.addEventListener('click', calculateMultiplay);
// buttonDivide?.addEventListener('click', calculateDivide);




