


function sum(){

    const numberone = document.getElementById('numberone');
    const numbertwo = document.getElementById('numbertwo');
    const sump = document.getElementById('sum');

    const sum = parseInt(numberone.value) + parseInt(numbertwo.value)
    
    sump.innerHTML = sum;


}



