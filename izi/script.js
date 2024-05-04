let counter = 0;

const counterValue = document.getElementById('counter-value');
const maxBtn = document.getElementById('max-btn');
const minBtn = document.getElementById('min-btn');
const resetBtn = document.querySelector('#reset');
const randomBtn = document.querySelector('#random');


maxBtn.addEventListener('click', () => {
	counter++;
	counterValue.innerHTML = counter;
});


minBtn.addEventListener('click', () => {
	counter--;
	counterValue.innerHTML = counter;
});


resetBtn.addEventListener('click', reset);

function reset() {
	counter = 0;
	counterValue.innerHTML = counter;
}

randomBtn.addEventListener('click', () => {
    counter = Math.floor(Math.random() * 101); 
    counterValue.innerHTML = counter;
});
