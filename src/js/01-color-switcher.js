import '../css/common.css';

const ref = {
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]'),
};

let intervalId = null;
const isActive = false;

ref.startBtn.addEventListener('click', ()  => {
    const intervalId = setInterval(() => {
        getRandomHexColor();
    }, 1000);
    
});

ref.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId); 
});


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

