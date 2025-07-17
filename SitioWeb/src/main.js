var H1 = document.querySelector('h1');
console.log(H1 === null || H1 === void 0 ? void 0 : H1.textContent);
var titulo = document.querySelector('.title');
console.log(titulo === null || titulo === void 0 ? void 0 : titulo.textContent);
var mensaje = document.querySelector('#messageInput');
console.log(mensaje.placeholder);
console.log("Hola de nuevo");
var entrada = document.getElementById('messageInput');
var boton = document.getElementById('showBtn');
var salida = document.getElementById('outputDiv');
boton.addEventListener('click', function () {
    var mensajeSalida = entrada.value;
    salida.textContent = mensajeSalida;
});
