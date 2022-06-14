let newWidth = window.innerWidth;
let newHeight = window.innerHeight; 

document.getElementById('screensize').textContent = 'Width  ' + newWidth + 'px ' + 'Height ' + newHeight + 'px';


window.addEventListener('resize', function(event){
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight; 

    document.getElementById('screensize').textContent = 'Width  ' + newWidth + 'px ' + 'Height ' + newHeight + 'px';
});




