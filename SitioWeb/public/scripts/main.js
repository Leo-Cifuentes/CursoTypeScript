"use strict";
const h1 = document.querySelector('h1');
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent);
let title = document.querySelector('.title');
console.log(title === null || title === void 0 ? void 0 : title.textContent);
let message = document.querySelector('#messageInput');
console.log(message.placeholder);
console.log("Hola de nuevo");
const input = document.getElementById('messageInput');
const button = document.getElementById('showBtn');
const output = document.getElementById('outputDiv');
button.addEventListener('click', () => {
    const mensaje = input.value;
    output.textContent = mensaje;
});
