!function(){var e={form:document.querySelector(".form"),inputDelay:document.querySelector('input[name="delay"]'),inputStep:document.querySelector('input[name="step"]'),inputAmount:document.querySelector('input[name="amount"]')};e.form.addEventListener("submit",i),e.inputDelay.addEventListener("submit",i),e.inputStep.addEventListener("submit",i),e.inputAmount.addEventListener("submit",i);var t=e.inputDelay.value,n=(e.inputStep.value,e.inputAmount.value),o=0;function i(e){var i,u;e.preventDefault(),n,(i=o,u=t,new Promise((function(e,t){var n=Math.random()>.3;setTimeout((function(){n?e({position:i,delay:u}):t({position:i,delay:u})}),u)}))).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),o+=1}}();
//# sourceMappingURL=03-promises.4f674f3b.js.map