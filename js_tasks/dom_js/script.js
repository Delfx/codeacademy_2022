console.log(document.querySelector('#age-table'));
console.log(document.querySelector('#age'));
console.log(document.querySelector('#age').querySelectorAll('label'));

const forms = document.querySelector('form');
const inputLength = forms.querySelectorAll('input').length;
console.log(forms.querySelectorAll('input')[0].value);
console.log(forms.querySelectorAll('input')[inputLength-2].value);


