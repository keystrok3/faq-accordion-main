

/**
 * FAQ accordion JavaScript interactivity
*/


const btns = document.querySelectorAll('.open-btn')

const answers = document.querySelectorAll('.answer');

btns.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        btn.classList.toggle("open");

        answers[i].classList.toggle("display")
    })
    
});