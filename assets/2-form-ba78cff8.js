const o=document.querySelector(".js-feedback-form");let r={};const l=t=>{const e=JSON.parse(localStorage.getItem("feedback-form-data"));if(e!==null){r=e;for(const a in e)e.hasOwnProperty(a)&&(t.elements[a].value=e[a])}};l(o);const s=t=>{const e=t.target.name,a=t.target.value;r[e]=a,localStorage.setItem("feedback-form-data",JSON.stringify(r))},n=t=>{t.preventDefault();const e=document.querySelector('input[name="user_email"]').value,a=document.querySelector('textarea[name="user_message"]').value;if(e===""||a===""){alert("Fill please all fields");return}t.target.reset(),localStorage.removeItem("feedback-form-data")};o.addEventListener("input",s);o.addEventListener("submit",n);
//# sourceMappingURL=2-form-ba78cff8.js.map
