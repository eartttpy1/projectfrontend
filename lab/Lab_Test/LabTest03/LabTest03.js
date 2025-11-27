const boxDisplay = document.querySelectorAll('.box');
const container = document.querySelector('.container');

boxDisplay.forEach(box => {
    box.addEventListener('click',() =>{
        container.classList.toggle('is-swapped');
    });
});
