import {clienteCinema} from './clienteCinema'
import {saladeCinema} from './saladeCinema'

declare function require(msg: string) : any;
var readline = require('readline-sync');

let show : string = "" +
    "a - criar uma sala" + "\n" +
    "b - reservar cadeira "+ "\n" +
    "c - cancelar reserva" + "\n" +
    "d - mostrar status da sala" + "\n";

let sala : saladeCinema = null;

let nAssentos : number = readline.question("Digite quantos assentos tem a sala:");
sala = new saladeCinema(nAssentos);

let id : string = null;
let fome : string = null;
let num : number = null;

while(true){
    console.log(show);
    let comando : string = readline.question("Digite um comando");

    switch(comando){
        case "1":
            let nAssentos : number = readline.question("Digite a quantidade de assentos da sala");
            sala = new saladeCinema(nAssentos);
            break;
        case "2":
            id = readline.question("Digite o id");
            fone = readline.question("Digite o telefone");
            indice = readline.question("Digite o numero do assento:");
            sala.reserva(id,fone,indice );
            break;
        case "3":
            id = readline.question("digite o id");
            sala.cancela(id);
            break;
        case"4":
            console.log(sala.mostrar());
            break;
     }
}