const bigImage = document.querySelector('.big img');
const thumbnailImage = document.querySelectorAll('.thumbnail img');

thumbnailImage.forEach(img =>{
    img.addEventListener('click', selectBigImage);
})

function selectBigImage(e){
    const big = e.target.src;
    bigImage.src = big;
}