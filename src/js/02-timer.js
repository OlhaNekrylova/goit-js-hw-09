import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/common.css';

const refs = {
    startBtn : document.querySelector('button[data-start]'),
    clockfaceDatetimePicker : document.querySelector('#datetime-picker'),
    clockfaceTimer : document.querySelector('.timer'),
};

const selectedDates = [];
let upDate = null;
let deltaTime = null; 

flatpickr('input#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= new Date()) {
        Notify.info('Please choose a date in the future');
        refs.startBtn.disabled = true;
    } 
    selectedDates.push(new Date()); 
    
    upDate = selectedDates[0].getTime();
    console.log(upDate);
    refs.startBtn.disabled = false;
    }
    },
);

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
    
        this.isActive = true;

        const lastTime = upDate;
        
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = lastTime - currentTime;
            console.log('c', currentTime);
            console.log('l', lastTime);   
            console.log('d', deltaTime);  
            const time = convertMs(deltaTime);
                if (deltaTime <= 1000) {
                    clearInterval(this.intervalId);
                    this.isActive = false;
                }
            
            this.onTick(time);
            console.log('t', time);
        }, 1000); 
    }
};

const timer = new Timer({ onTick : updateClockface });

refs.startBtn.addEventListener('click', onStartBtnClick);

function onStartBtnClick () {
    // evt.preventDefault();
    timer.start(); 
}

function updateClockface({ days, hours, minutes, seconds }) {
    refs.clockfaceTimer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
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