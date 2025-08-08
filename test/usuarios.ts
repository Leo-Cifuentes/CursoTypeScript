import { Usuario } from "./classUsuario"

const user1 = new Usuario("Nini", "niyorodriguez@gmail.com", "Fusagasugá");
const user2 = new Usuario("Leonardo", "leocifuentesp@gmail.com", "Bogotá");
const user3 = new Usuario("Diana", "dianitarodriguez@gmail.com", "Cambulos");
const user4 = new Usuario("Daniel", "danielrupe@gmail.com", "Bogotá");

console.log(user1);
console.log(user2.getInfo());
console.log(user3.name);
console.log(user4.name, user4.email);