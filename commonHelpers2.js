import"./assets/styles-f002ac9a.js";import{S as l}from"./assets/vendor-870f0eb5.js";new l(".gallery a",{});const m="feedback-form-state",e=document.querySelector(".feedback-form");let o=!1;function n(){if(!o){const t=e.email.value.trim(),a=e.message.value.trim(),s={email:t,message:a};localStorage.setItem(m,JSON.stringify(s))}}e.addEventListener("input",t=>{n()});e.addEventListener("submit",t=>{t.preventDefault();const a=e.elements.email.value.trim(),s=e.elements.message.value.trim();a&&s?(console.log({email:a,message:s}),e.reset(),localStorage.removeItem(m),o=!0):alert("Будь ласка, заповніть усі поля форми")});window.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(m);if(t&&!o){const{email:a,message:s}=JSON.parse(t);e.elements.email.value=a||"",e.elements.message.value=s||""}});localStorage.getItem(m);
//# sourceMappingURL=commonHelpers2.js.map
