
//

const getClickMeButton = document.querySelector('#clickMe')

function buttonAlert (){
    return alert('Hello World!')
}

getClickMeButton.addEventListener('click', buttonAlert)