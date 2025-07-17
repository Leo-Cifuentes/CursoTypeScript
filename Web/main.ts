const input = document.getElementById('messageInput') as HTMLInputElement;
const button = document.getElementById('showBtn') as HTMLButtonElement;
const output = document.getElementById('outputDiv') as HTMLDivElement;

button.addEventListener('click', () => {
  const mensaje = input.value;
  output.textContent = mensaje;
});