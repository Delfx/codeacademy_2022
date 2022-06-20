function randomImg() {
    const images = ['pic_1.jpeg', 'pic_2.jpeg', 'pic_3.jpeg'];

    const randomImgNumber = images[Math.floor(Math.random() * images.length)];

    return randomImgNumber;

}

function addPicture(random_img) {
    const selectImg = document.querySelector('.random-img');
    selectImg.setAttribute('src', './assets/pic/' + random_img);
    console.log(random_img);
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector('.clock-container').textContent = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function showConfirmation() {
    const inputName = document.querySelector('#formGroupExampleInput');
    const inputEmail = document.querySelector('#formGroupExampleInput2');
    const confirmedText = document.querySelector('.conformation-text');
    const rejectedText = document.querySelector('.reject-text');

    if (inputName.value != '' && inputEmail != '') {
        confirmedText.style.display = 'block'
        rejectedText.style.display = 'none'
    } else {
        rejectedText.style.display = 'block'
        confirmedText.style.display = 'none'
    }
}



window.addEventListener('DOMContentLoaded', () => {
    addPicture(randomImg())
    setInterval('addPicture(randomImg())', 2000)
    startTime();

    document.querySelector('.btn-send-form').addEventListener('click', () => {
        showConfirmation();
    })
})