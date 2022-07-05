window.addEventListener("DOMContentLoaded", e => {

    //aler for 'click me' button

    const getClickMeButton = document.querySelector('#clickMe');

    function buttonAlert() {
        return alert('Hello World!');
    }

    getClickMeButton.addEventListener('click', buttonAlert);

    // Input for convert case 
    const getInputForConvert = document.querySelector('#convertTextInput');

    //convert text to upper case when push button "To Upper Case"
    const getUpperCaseButton = document.querySelector('#upperCaseAll');

    function upperCaseAll() {
        return getInputForConvert.value = getInputForConvert.value.toUpperCase();
    }

    getUpperCaseButton.addEventListener('click', upperCaseAll);


    //convert text to lower case when push button "To Lower Case"
    const getLowerCaseButton = document.querySelector('#lowerCaseAll');

    function lowerCaseAll() {
        getInputForConvert.value = getInputForConvert.value.toLowerCase();
    }

    getLowerCaseButton.addEventListener('click', lowerCaseAll);


    //convert text first letter to upper case when push button "First Upper Case"
    const getupperCaseFirstButton = document.querySelector('#upperCaseFirst');

    function capitalizeFirstLetter() {

        // converting first letter to uppercase
        return getInputForConvert.value = getInputForConvert.value.charAt(0).toUpperCase() + getInputForConvert.value.slice(1);

    }

    getupperCaseFirstButton.addEventListener('click', capitalizeFirstLetter);



    //convert text first letter to lower case when push button "First Lower Case"
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

    //style function to change text style
    const textToStyle = document.querySelector('#lorum-text');
    const cursorsButton = document.querySelector('#cursors-dropdown');
    const colorButton = document.querySelector('#color-dropdown');
    const borderButton = document.querySelector('#border-dropdown');
    const resetButton = document.querySelector('#reset-all-button')


    //Event for style Cursors change 
    cursorsButton.addEventListener('click', (e) => {

        if (e.target.value == 1) {
            textToStyle.style.cursor = 'pointer'
        } else if (e.target.value == 2) {
            textToStyle.style.cursor = 'text'
        } else if (e.target.value == 3) {
            textToStyle.style.cursor = 'copy'
        } else if (e.target.value == 4) {
            textToStyle.style.cursor = 'help'
        } else if (e.target.value == 5) {
            textToStyle.style.cursor = 'crosshair'
        }
    })

    //Event for style color change 
    colorButton.addEventListener('click', (e) => {

        if (e.target.value == 1) {
            textToStyle.style.color = 'red'
        } else if (e.target.value == 2) {
            textToStyle.style.color = 'green'
        } else if (e.target.value == 3) {
            textToStyle.style.color = 'blue'
        }

    })

    //Event for style Border change 
    borderButton.addEventListener('click', (e) => {

        if (e.target.value == 1) {
            textToStyle.style.border = 'solid'
            textToStyle.style.borderColor = 'red'
        } else if (e.target.value == 2) {
            textToStyle.style.border = 'solid'
            textToStyle.style.borderColor = 'green'
        } else if (e.target.value == 3) {
            textToStyle.style.border = 'solid'
            textToStyle.style.borderColor = 'blue'
        }

    })

    //Event for reset all style 

    resetButton.addEventListener('click', (e) => {
        textToStyle.style.border = 'none'
        textToStyle.style.color = 'black'
        textToStyle.style.cursor = 'auto'
    })





//forms validation//
    const forms = document.querySelectorAll('.needs-validation')
    const submitButton = document.querySelector('#formSubmit')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        submitButton.addEventListener('click', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })

});