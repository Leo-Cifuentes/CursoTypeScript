const H1 = document.querySelector('h1');
console.log(H1?.textContent);

let titulo : HTMLHeadingElement = document.querySelector('.title') as HTMLHeadingElement;
console.log(titulo?.textContent);

let mensaje = document.querySelector('#messageInput') as HTMLInputElement;
console.log(mensaje.placeholder);
console.log("Hola de nuevo");

const entrada = document.getElementById('messageInput') as HTMLInputElement;
const boton = document.getElementById('showBtn') as HTMLButtonElement;
const salida = document.getElementById('outputDiv') as HTMLDivElement;

boton.addEventListener('click', () => {
  const mensajeSalida = entrada.value;
  salida.textContent = mensajeSalida;
});