
//aler for 'click me' button

const getClickMeButton = document.querySelector('#clickMe');

function buttonAlert() {
    return alert('Hello World!');
}

getClickMeButton.addEventListener('click', buttonAlert);

// Input for convert case 
const getInputForConvert = document.querySelector('#convertTextInput');

//convert text to upper case when bush button "To Upper Case"
const getUpperCaseButton = document.querySelector('#upperCaseAll');

function upperCaseAll() {
   return getInputForConvert.value = getInputForConvert.value.toUpperCase();
}

getUpperCaseButton.addEventListener('click', upperCaseAll);


//convert text to lower case when bush button "To Lower Case"
const getLowerCaseButton = document.querySelector('#lowerCaseAll');

function lowerCaseAll() {
    getInputForConvert.value = getInputForConvert.value.toLowerCase();
}

getLowerCaseButton.addEventListener('click', lowerCaseAll);


//convert text first letter to upper case when bush button "First Upper Case"
const getupperCaseFirstButton = document.querySelector('#upperCaseFirst');

function capitalizeFirstLetter() {

    // converting first letter to uppercase
  return getInputForConvert.value = getInputForConvert.value.charAt(0).toUpperCase() + getInputForConvert.value.slice(1);

}

getupperCaseFirstButton.addEventListener('click', capitalizeFirstLetter);



//convert text first letter to lower case when bush button "First Lower Case"
const getLowerCaseFirstButton = document.querySelector('#lowerCaseFirst');

function lowerFirstLetter() {

    // converting first letter to lowercase
  return getInputForConvert.value = getInputForConvert.value.charAt(0).toLowerCase() + getInputForConvert.value.slice(1);

}

getLowerCaseFirstButton.addEventListener('click', lowerFirstLetter);


