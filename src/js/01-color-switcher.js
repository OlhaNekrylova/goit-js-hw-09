import '../css/common.css';

const ref = {
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]'),
};

let intervalId = null;
let isActive = false;

ref.startBtn.addEventListener('click', onStartBtnClick);

ref.stopBtn.addEventListener('click', onStopBtClick);

function  onStartBtnClick (evt) {
    if (isActive) {
        return;
    }
        
    isActive = true;
        
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}

function onStopBtClick (evt) {
    clearInterval(intervalId); 
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

