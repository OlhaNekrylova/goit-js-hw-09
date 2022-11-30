import { Notify } from 'notiflix/build/notiflix-notify-aio';
import '../css/common.css';

const refs = {
  form : document.querySelector('.form'),
  inputDelay : document.querySelector('input[name="delay"]'),
  inputStep : document.querySelector('input[name="step"]'), 
  inputAmount : document.querySelector('input[name="amount"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.inputDelay.addEventListener('submit', onFormSubmit);
refs.inputStep.addEventListener('submit', onFormSubmit);
refs.inputAmount.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
      
    }, delay);
  });
};

function onFormSubmit(evt) {
  evt.preventDefault();
  let delay = parseInt(refs.inputDelay.value);
  const step = parseInt(refs.inputStep.value);
  const amount = parseInt(refs.inputAmount.value);
  
  for (let position = 1; position <= amount;  position +=1) {
    
    createPromise(position, delay)
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    
    delay += step;
  }
};
