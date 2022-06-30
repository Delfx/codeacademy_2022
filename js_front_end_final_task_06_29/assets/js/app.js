
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

//block or unblock with button and readonly property
const readonlyInput = document.querySelector('#readonly-input')
const blockButton = document.querySelector('#button-block')
const unblockButton = document.querySelector('#button-unblock')

blockButton.addEventListener('click', () => {
    readonlyInput.readOnly = true;
})

unblockButton.addEventListener('click', () => {
    readonlyInput.readOnly = false;
})

//picture onhover show hide 
const firsPicture = document.querySelector('#first-picture');
const secondPicture = document.querySelector('#second-picture');

firsPicture.addEventListener('mouseover', (e) => {
    secondPicture.style.display = 'inline'
    firsPicture.style.display = 'none'
})

secondPicture.addEventListener('mouseleave', () => {
    secondPicture.style.display = 'none'
    firsPicture.style.display = 'inline'
})

//style button functions
const textToStyle = document.querySelector('#lorum-text');
const colorButton = document.querySelector('#color-dropdown');


colorButton.addEventListener('click', (e) => {

    if(e.target.value == 1){
        textToStyle.setAttribute("style","color:red !important")
    }else if(e.target.value == 2){
        textToStyle.setAttribute("style","color:green !important")
    }else if(e.target.value == 3){
        textToStyle.setAttribute("style","color:blue !important")
    }
    
})


