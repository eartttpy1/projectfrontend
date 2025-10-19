const question = document.querySelectorAll('.ques');

question.forEach(q =>{
    q.addEventListener('click', ()=>{
        const answer = q.nextElementSibling;
        answer.classList.toggle('clicked');
    });
});