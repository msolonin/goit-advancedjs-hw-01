import"./assets/modulepreload-polyfill-3cfb730f.js";const l=document.querySelector(".feedback-form");let o={};const r=t=>{const e=JSON.parse(localStorage.getItem("feedback-form-data"));if(e!==null){o=e;for(const a in e)e.hasOwnProperty(a)&&(t.elements[a].value=e[a])}};r(l);const n=t=>{const e=t.target.name,a=t.target.value;o[e]=a,localStorage.setItem("feedback-form-data",JSON.stringify(o))},s=t=>{t.preventDefault();const e=document.querySelector('input[name="email"]').value,a=document.querySelector('textarea[name="message"]').value;if(e===""||a===""){alert("Fill please all fields");return}else console.log(o),t.target.reset(),localStorage.removeItem("feedback-form-data")};l.addEventListener("input",n);l.addEventListener("submit",s);
//# sourceMappingURL=commonHelpers2.js.map
