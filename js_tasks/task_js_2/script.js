let userInfoOutput = document.getElementById('main');

let user = {
    name: 'Lukas',
    surname: 'Motie'
}


userInfoOutput.innerHTML = `<h2>User Information</h2>
<p>Vartotojo vardas yra ${user.name}, o pavardė ${user.surname}.</p>`;
