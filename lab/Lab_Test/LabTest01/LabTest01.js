const switchDiplay = document.querySelector('.switch');
const bodyDisplay = document.querySelector('body');


switchDiplay.addEventListener('click', toggle);



function toggle(){
    switchDiplay.classList.toggle('.clicked')
    let dark = switchDiplay.classList.contains('.clicked');
    if(dark){
        switchDiplay.textContent = "ปิด Dark Mode";
        bodyDisplay.style.background = 'black';
        bodyDisplay.style.color = 'white';
    }
    

    if(!dark){
        switchDiplay.textContent = "เปิด Dark Mode";
        bodyDisplay.style.background = 'white';
        bodyDisplay.style.color = 'black';
    }
}