import"./assets/modulepreload-polyfill-3cfb730f.js";const l=document.querySelector(".feedback-form");let o={email:"",message:""};const r=a=>{const e=JSON.parse(localStorage.getItem("feedback-form-data"));if(e!==null){o=e;for(const t in e)e.hasOwnProperty(t)&&(a.elements[t].value=e[t])}};r(l);const s=a=>{const e=a.target.name,t=a.target.value;o[e]=t,localStorage.setItem("feedback-form-data",JSON.stringify(o))},n=a=>{a.preventDefault();const e=document.querySelector('input[name="email"]').value,t=document.querySelector('textarea[name="message"]').value;if(e===""||t===""){alert("Fill please all fields");return}else console.log(o),a.target.reset(),localStorage.removeItem("feedback-form-data")};l.addEventListener("input",s);l.addEventListener("submit",n);
//# sourceMappingURL=commonHelpers2.js.map
