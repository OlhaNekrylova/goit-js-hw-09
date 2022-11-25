const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};t.startBtn.addEventListener("click",(()=>{setInterval((()=>{Math.floor(16777215*Math.random()).toString(16)}),1e3)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(null)}));
//# sourceMappingURL=01-color-switcher.b78b3741.js.map
