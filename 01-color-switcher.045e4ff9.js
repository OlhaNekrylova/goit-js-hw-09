const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let n=null;function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.startBtn.addEventListener("click",(function(o){t.startBtn.disabled&&e();n=setInterval((()=>{document.body.style.backgroundColor=e()}),1e3)})),t.stopBtn.addEventListener("click",(function(t){clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.045e4ff9.js.map