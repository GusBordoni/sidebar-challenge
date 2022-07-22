const toggleButton = document.getElementById('toggleButton');
const logoImg = document.getElementById('logoImg');
const nav = document.getElementById('nav');

toggleButton.addEventListener('click', () => {
    console.log('legal');

    var elems = document.getElementsByClassName('toHide');
    for (var i=0;i<elems.length;i+=1){
    elems[i].classList.toggle('hide');
    }

    logoImg.classList.toggle('logo-hide');
    nav.classList.toggle('shrink');
    toggleButton.classList.toggle('toggle-pos');
    
});