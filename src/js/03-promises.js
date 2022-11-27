import '../css/common.css';

refs = {
  form : document.querySelector('.form'),
  inputDdelay : document.querySelector('input[name="delay"]'),
  inputStep : document.querySelector('input[name="step"]'), 
  inputAmount : document.querySelector('input[name="amount"]'),
};

refs.form.addEventlistener('submit', onFormSubmit);

function createPromise(position, delay) {
  const delay = firstDelay + delayStep;
  const firstDelay = refs.inputDdelay.value;
  const delayStep = refs.inputStep.value;
  const AMOUNT = refs.inputAmount.value;
  let position = 0;
  let counter = 0;
  let intervalId = null;

  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setInterval(() => {
      if (counter === AMOUNT) {
        clearInterval(intervalId);
        return;
      }

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


