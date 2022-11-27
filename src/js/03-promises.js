import '../css/common.css';

refs = {
  form : document.querySelector('.form'),
  inputDdelay : document.querySelector('input[name="delay"]'),
  inputStep : document.querySelector('input[name="step"]'), 
  inputAmount : document.querySelector('input[name="amount"]'),
};

refs.form.addEventlistener('submit', onFormSubmit);
// refs.inputDdelay.addEventlistener('submit', onFormSubmit);
// refs.inputStep.addEventlistener('submit', onFormSubmit);
// refs.inputAmount.addEventlistener('submit', onFormSubmit);

const firstDelay = refs.inputDelay.value;
const delayStep = refs.inputStep.value;
const delay = firstDelay + delayStep;
const AMOUNT = refs.inputAmount.value;
let position = 0;
let counter = 0;
let intervalId = null;

function createPromise(position, delay) {
  
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    counter = AMOUNT;

    const intervalId = setInterval(() => {
      // if (counter === AMOUNT) {
      //   clearInterval(intervalId);
      //   return;
      // }
      
      if (shouldResolve) {
        resolve();// Fulfill
      } else {
        reject();// Reject
      }
      position += 1;
      counter += 1;
    }, delay);
  });
}

function onFormSubmit(evt) {
  createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}


