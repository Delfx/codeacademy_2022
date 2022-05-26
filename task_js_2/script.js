let userInfoOutput = document.getElementById('main');

let user = {
    name: 'Lukas',
    surname: 'Motie'
}

const h2 = document.createElement("h2");
const textNode = document.createTextNode("User Information");
h2.appendChild(textNode);

const pTag = document.createElement("p");
const textPtag = document.createTextNode(`Vartotojo vardas yra ${user.name}, o pavardė ${user.surname}.`);
pTag.appendChild(textPtag);

userInfoOutput.appendChild(h2);
userInfoOutput.appendChild(pTag);

