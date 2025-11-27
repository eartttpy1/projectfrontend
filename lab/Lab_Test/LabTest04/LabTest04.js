function getQuote() {
  // กำหนด Array ให้
    quotes = new Array(4);
    sources = new Array(4);
    quotes[0] = "When I was a boy of 14, my father was so " +
    "ignorant...but when I got to be 21, I was astonished " +
    "at how much he had learned in 7 years.";
    sources[0] = "Mark Twain";
    quotes[1] = "Everybody is ignorant. Only on different " +
    "subjects.";
    sources[1] = "Will Rogers";
    quotes[2] = "They say such nice things about people at " +
    "their funerals that it makes me sad that I'm going to " +
    "miss mine by just a few days.";
    sources[2] = "Garrison Keillor";
    quotes[3] = "What's another word for thesaurus?";
    sources[3] = "Steven Wright";

    const textDisplay = document.querySelectorAll('.text');
    const randomIndex = Math.floor(Math.random() * 4);
    const pQues = document.getElementById('ques');
    const pAns = document.getElementById('ans');

    pQues.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${quotes[randomIndex]}`;
    pAns.innerHTML = sources[randomIndex];

}
getQuote();

const bigImage = document.querySelector('.big img');
const thumbnailImage = document.querySelectorAll('.thumbnail img');

thumbnailImage.forEach(img =>{
    img.addEventListener('click', selectBigImage);
})

function selectBigImage(e){
    const big = e.target.src;
    bigImage.src = big;
}
