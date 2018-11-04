import {Guerreiro} from "./Guerreiro";
import {Mago} from "./Mago";
import {Arqueiro} from "./Arqueiro";

console.log("ok");

let g : Guerreiro = new Guerreiro ("Broknar", 100,20);
let m : Mago = new Mago ("Salazar", 60,80);
let a : Arqueiro = new Arqueiro ("Caolho", 80, 40);

a.atacar(g);
g.atacar(m);
m.atacar(a);

console.log(a.toString());
console.log(g.toString());
console.log(m.toString());