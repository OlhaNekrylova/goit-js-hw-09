import '../css/common.css';

const refs = {
    stardBtn : document.querySelector('button[data-start]'),
    clockfaceDatetimePicker : document.querySelector('#datetime-picker'),
    clockfaceTimer : document.querySelector('.timer'),
};

class Timer{
    constructor({ onTick }) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;
    }

    start() {
        if (this.isActive) {
            return;
        }
    
        const lastTime = Date.now();
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = lastTime - currentTime;
            convertMs(deltaTime);
            this.onTick(ms);
        }, 1000);
    }

    stop() {
        if (lastTime === currentTime) {
            clearInterval(this.intervalId);
            this.isActive = false;
        }
    }
};

const timer = new Timer({ onTick : updateClockface });

refs.stardBtn.addEventListener('clicK', () => {
    timer.start();
});

function updateClockface({ days, hours, minutes, seconds }) {
    refs.clockfaceDatetimePicker.textContent = currentTime;
    refs.clockfaceTimer.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
}