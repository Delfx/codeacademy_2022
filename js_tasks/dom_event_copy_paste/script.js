const copyInput =  document.getElementsByName('copy');

const pasteInput = document.getElementsByName('paste');

const buttonCopy = document.querySelector('button')

function copyPaste (){
    pasteInput[0].value = copyInput[0].value
    console.log(copyInput[0].value);
}


buttonCopy.addEventListener('click', copyPaste)

