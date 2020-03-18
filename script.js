//Navigation//
document.addEventListener("DOMContentLoaded", function(event) { 
const MENU = document.getElementById('menu');

MENU.addEventListener('click', (event) => {
    if(event.target.tagName == 'li') {
        return;
    }
    MENU.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    event.target.closest('li').classList.add('active');
});

document.addEventListener('scroll', onScroll);

function onScroll (event) {
    let currentPosition = window.scrollY;
    console.log(document.querySelector.classList('anchor'));
    document.querySelectorAll('.anchor').forEach(el => {
        el.getAttribute('id');

        if(el.offsetTop <= currentPosition && (el.offsetTop + el.offsetHeight > currentPosition))
    })
}

//Phones//
const DISPLAY_VERTICAL = document.getElementById('vertical-fill');
const DISPLAY_HORIZONTAL = document.getElementById('horizontal-fill');
const PHONE_VERTICAL = document.getElementById('vertical');
const PHONE_HORIZONTAL = document.getElementById('horizontal');

PHONE_HORIZONTAL.addEventListener ('click', (event) => {
    if (DISPLAY_HORIZONTAL.style.opacity == '0') {
        DISPLAY_HORIZONTAL.style.opacity = '1';
    } else {
        DISPLAY_HORIZONTAL.style.opacity = '0';
    }
})
PHONE_VERTICAL.addEventListener ('click', (event) => {
    if (DISPLAY_VERTICAL.style.opacity == '0') {
        DISPLAY_VERTICAL.style.opacity = '1';
    } else {
        DISPLAY_VERTICAL.style.opacity = '0';
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
const CLOSE_BUTTON = document.getElementById('close_btn');

FORM.addEventListener('submit', (event) => {
    let subject = document.getElementById('subject').value;
    let description = document.getElementById('description').value;
    if (!subject) {
        subject = 'Without subject';
    } else {
        subject = 'Subject: ' + subject;
    }
    if (!description) {
        description = 'Without description';
    } else {
        description = 'Description: ' + description;
    }
    document.getElementById('message_subject').innerText = subject;
    document.getElementById('message_description').innerText = description;
    document.getElementById('message_block').classList.remove('hidden');
    event.preventDefault();
})

CLOSE_BUTTON.addEventListener('click', (event) => {
    document.getElementById('message_subject').innerText = '';
    document.getElementById('message_description').innerText = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message_block').classList.add('hidden');
});
/*Slider*/

let items = document.querySelectorAll('.carusel .slider-item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('next', direction);
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('next', direction);
        this.classList.add('active');
		isEnabled = true;
	});
}

function nextItem(n) {
	hideItem('to-left');
	changeCurrentItem(n + 1);
	showItem('from-right');
}

function previousItem(n) {
	hideItem('to-right');
	changeCurrentItem(n - 1);
	showItem('from-left');
}

document.querySelector('.control.left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.control.right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});
});