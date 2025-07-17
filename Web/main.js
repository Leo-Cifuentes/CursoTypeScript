"use strict";
const input = document.getElementById('messageInput');
const button = document.getElementById('showBtn');
const output = document.getElementById('outputDiv');
button.addEventListener('click', () => {
    const mensaje = input.value;
    output.textContent = mensaje;
});
