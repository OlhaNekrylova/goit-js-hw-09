import '../css/common.css';

const refs = {
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.stopBtn.addEventListener('click', onStopBtClick);

function  onStartBtnClick (evt) {
    if (refs.startBtn.disabled) {
        getRandomHexColor(); 
    }

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
}

function onStopBtClick (evt) {
    clearInterval(intervalId); 
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

