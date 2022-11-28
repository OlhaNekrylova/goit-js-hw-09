import '../css/common.css';

const refs = {
    startBtn : document.querySelector('button[data-start]'),
    stopBtn : document.querySelector('button[data-stop]'),
};

let intervalId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.stopBtn.addEventListener('click', onStopBtClick);

function  onStartBtnClick (evt) {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;
}

function onStopBtClick (evt) {
    clearInterval(intervalId); 
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

