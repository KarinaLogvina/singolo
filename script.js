const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    if(event.target.tagName == 'li') {
        return;
    }
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.closest('li').classList.add('active');
});

const DISPLAY_VERTICAL = document.getElementById('vertical-fill');
const DISPLAY_HORIZONTAL = document.getElementById('horizontal-fill');
const PHONE_VERTICAL = document.getElementById('vertical');
const PHONE_HORIZONTAL = document.getElementById('horizontal');

PHONE_HORIZONTAL.addEventListener ('click', (event) => {
    if (DISPLAY_HORIZONTAL.style.display == 'none') {
        DISPLAY_HORIZONTAL.style.display = 'block';
    } else {
        DISPLAY_HORIZONTAL.style.display = 'none';
    }
})
PHONE_VERTICAL.addEventListener ('click', (event) => {
    if (DISPLAY_VERTICAL.style.display == 'none') {
        DISPLAY_VERTICAL.style.display = 'block';
    } else {
        DISPLAY_VERTICAL.style.display = 'none';
    }
});

const PORTFOLIO_ITEM = document.getElementById('portfolio_images');

PORTFOLIO_ITEM.addEventListener('click', (event) => {
    PORTFOLIO_ITEM.querySelectorAll('li').forEach(el => el.classList.remove('selected'));
    event.target.classList.add('selected');
});

const TAGS = document.getElementById('tags');
let elements = Array.from(PORTFOLIO_ITEM.querySelectorAll('li'));
function shuffle(elements) {
    for(let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [elements[i], elements[j]] = [elements[j], elements[i]]; 
    }
}

TAGS.addEventListener('click', (event) => {
    if(event.target.classList.contains('active')) {
        return;
    }
    TAGS.querySelectorAll('button').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
    shuffle(elements);
    elements.forEach(el => PORTFOLIO_ITEM.appendChild(el));
});

/*Форма*/
const FORM = document.getElementById('form');
const BUTTON = document.getElementById('submit_btn');
const CLOSE_BUTTON = document.getElementById('close_btn');

BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = subject;
    document.getElementById('message_block').classList.remove('hidden');
});

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('result').innerText = '';
    document.getElementById('message_block').classList.add('hidden');
});

