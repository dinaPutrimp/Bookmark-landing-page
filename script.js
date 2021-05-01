const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const logoFill = document.querySelector('.logo-fill');
const links = document.querySelectorAll('.link');
const cards = document.querySelectorAll('.card');
const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');
const arrowStroke = document.querySelectorAll('.qna-active');
const arrow = document.querySelectorAll('.arrow');
const form = document.querySelector('.form');
const emailInput = document.querySelector('input');
const infos = document.querySelectorAll('.info');

window.onload = () => {
    removeLinkActive();
    removeClassActive();
    links[0].classList.add('active');
    cards[0].classList.add('active');
    emailInput.value = '';
}

hamburger.addEventListener('click', () => {
    if (navLinks.classList.toggle('nav-active')) {
        logoFill.style.fill = 'white';
        hamburger.innerHTML = '<path fill="#FFF" fill-rule="evenodd" d="M8 5.379L13.303.075l2.122 2.122L10.12 7.5l5.304 5.303-2.122 2.122L8 9.62l-5.303 5.304-2.122-2.122L5.88 7.5.575 2.197 2.697.075 8 5.38z"/>';
    } else {
        logoFill.style.fill = '#242A45';
        hamburger.innerHTML = `<path class="hamburger-fill" fill="#242A45" fill-rule="evenodd"
        d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/>`;
    }

});

//display card
let style = document.createElement('style');
let declair = document.createTextNode('.info:hover { opacity: 0.7 }');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault();
        removeLinkActive();
        removeClassActive();
        links[i].classList.add('active');
        cards[i].classList.add('active');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = declair.nodeValue;
        } else {
            style.appendChild(declair);
        }
        infos[i].appendChild(style);
    });
}

function removeLinkActive() {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
}
function removeClassActive() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active');
    }
}

//display answer
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        if (answers[i].classList.toggle('active')) {
            arrow[i].classList.add('active');
            arrowStroke[i].style.stroke = '#fa5757';
        } else {
            arrow[i].classList.remove('active');
            arrowStroke[i].style.stroke = '#5267DF';
        }

    })
}

// form validation
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputEmail();
});

function checkInputEmail() {
    const emailValue = emailInput.value.trim();
    const small = form.querySelector('small');

    if (emailValue === '') {
        form.className = 'form error';
        small.innerText = `Whoops, make sure it's an email`;
    } else if (!isEmail(emailValue)) {
        form.className = 'form error';
        small.innerText = `Whoops, make sure it's an email`;
    } else {
        form.className = 'form';
        small.innerText = '';
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}