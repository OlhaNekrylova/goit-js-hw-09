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

const delay = refs.inputDelay.value;
const step = refs.inputStep.value;
const AMOUNT = refs.inputAmount.value;
let position = 0;
let counter = 0;
let timeoutId = null;

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
  
  counter = AMOUNT;
  // if (counter === AMOUNT) {

  // }

    createPromise(position, delay)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    position += 1;
    // delay += step;
  
};


