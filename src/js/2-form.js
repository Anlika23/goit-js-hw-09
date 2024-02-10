'use stric';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const lightbox = new SimpleLightbox('.gallery a', { /* options */ });


const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

let isFormSubmitted = false;

function saveFormState() {
    if (!isFormSubmitted) {
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        const data = { email, message };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
}

form.addEventListener('input', (event) => {
    saveFormState(); 
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue && messageValue) {
        const formData = {
            email: emailValue,
            message: messageValue
        };
        console.log(formData);

        form.reset();
        localStorage.removeItem(STORAGE_KEY);

        isFormSubmitted = true;
    }
    else {
        
        alert('Будь ласка, заповніть усі поля форми');
    }
});

window.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData && !isFormSubmitted) {
        const { email, message } = JSON.parse(storedData);
        form.elements.email.value = email || "";
        form.elements.message.value = message || "";
    }
});

const rawData = localStorage.getItem(STORAGE_KEY);



// if (rawData) {
//     const data = JSON.parse(rawData);
//     form.email.value = data.email;
//     form.message.value = data.message;
// }