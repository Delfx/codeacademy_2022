const companies = [
    [
        'Alfreds Futterkiste',
        'Maria Anders',
        'Germany',
    ],
    [
        'Centro comercial Moctezuma',
        'Francisco Chang',
        'Mexico',
    ],
    [
        'Ernst Handel',
        'Roland Mendel',
        'Austria',
    ],
    [
        'Island Trading',
        'Helen Bennett',
        'UK',
    ],
    [
        'Laughing Bacchus Winecellars',
        'Yoshi Tannamuri',
        'Canada',
    ],
    [
        'Magazzini Alimentari Riuniti',
        'Giovanni Rovelli',
        'Italy',
    ]
];

const addClientAllInput = document.querySelectorAll('#client-field-set > input')


function createTd(text) {
    const td = document.createElement('td');
    td.textContent = text;
    return td;
}

function editButtonAction(editButton) {
    editButton.addEventListener('click', (eventFromEditButton) => {
        document.querySelector('#companies').style.display = 'none';
        document.querySelector('#submitClient').style.display = 'none';
        addClientAllInput[0].value = eventFromEditButton.path[1].querySelectorAll('td')[0].textContent
        addClientAllInput[1].value = eventFromEditButton.path[1].querySelectorAll('td')[1].textContent
        addClientAllInput[2].value = eventFromEditButton.path[1].querySelectorAll('td')[2].textContent

        editButtonsInFieldset(eventFromEditButton);
    })
}

function editButtonsInFieldset(eventFromEditButton) {
    const fieldSet = document.querySelector('#client-field-set');

    const buttonContainer = document.createElement('div')
    buttonContainer.setAttribute('id', 'edit-Buttons-InFieldset');

    const applyButton = document.createElement('button');
    applyButton.textContent = 'Apply';
    buttonContainer.appendChild(applyButton);
    fieldSet.appendChild(buttonContainer)

    const rejectButton = document.createElement('button');
    rejectButton.textContent = 'Back';
    buttonContainer.appendChild(rejectButton);
    fieldSet.appendChild(buttonContainer)

    rejectButtonAction(rejectButton);
    applyButtonAction(applyButton, eventFromEditButton);

}


function rejectButtonAction(rejectButton) {
    rejectButton.addEventListener('click', (e) => {
        document.querySelector('#companies').style.display = 'table';
        document.querySelector('#submitClient').style.display = 'block';
        document.querySelector('#edit-Buttons-InFieldset').style.display= 'none';
    })
}

function applyButtonAction(applyButton, eventFromEdditButton){

    applyButton.addEventListener('click', (e) =>{

        console.log(eventFromEdditButton);

        // e.path[1].querySelectorAll('td')[0].textContent = addClientAllInput[0]
        // e.path[1].querySelectorAll('td')[1].textContent = addClientAllInput[1]
        // e.path[1].querySelectorAll('td')[2].textContent = addClientAllInput[2]

        document.querySelector('#companies').style.display = 'table';
        document.querySelector('#submitClient').style.display = 'block';
        document.querySelector('#edit-Buttons-InFieldset').style.display= 'none';
       
    })
        
}

function actionButtons(tr) {

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    tr.appendChild(deleteButton);
    deleteButtonAction(deleteButton);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    tr.appendChild(editButton);
    editButtonAction(editButton);
}


function deleteButtonAction(deleteButton) {
    deleteButton.addEventListener('click', (e) => {
        if (confirm('Delete?')) {
            e.path[1].remove();
        }
    })
}



function addClient(company, contact, country) {
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');

    tr.appendChild(createTd(company));
    tr.appendChild(createTd(contact));
    tr.appendChild(createTd(country));

    actionButtons(tr);
    tbody.appendChild(tr);
}




window.addEventListener("DOMContentLoaded", (e) => {
    companies.forEach(company => {
        addClient(company[0], company[1], company[2]);
    })

    document?.getElementById('submitClient').addEventListener('click', (e) => {
        addClient(addClientAllInput[0].value, addClientAllInput[1].value, addClientAllInput[2].value)
    })
})

