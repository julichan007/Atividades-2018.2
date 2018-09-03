declare function require(msg : string) : any;
var declare = require('readline-sync');

import {CarroP} from "./carroPoo";

let car : CarroP = new CarroP();

car.combustivel = 0;
car.pessoas = 0;
car.qtdkm = 0;

while(true){
    let escolhaOsComandos : string = "" + 
        "qtdcomb - mostrar a quantidade de combustivel\n" +
        "abas - abastecer o tanque do carro\n " +
        "sairdocar - sair do carro\n" +
        "entnocar - entrada no carro\n"+
        "movimento - fazer o carro andar\n"+
        "sair - encerrar programa\n";
    console.log(escolhaOsComandos);
    let comando : string = readline.question("digite um comando: ");
    if (comando == "sair"){
        console.log("Tchau!");
        break;
    }
    switch(comando){
        case "qtdcomb":
            car.show();
            break;
        
        case "abas":
            let litros : number = readline.question("Quantos litros? ");
            car.tanque();
            break;
        
        case "sairdocar":
            let pessoasSaindo : number = readline.question("Digite quantas pessoas sairam: ");
            car.saida();
            break;
        case "entnocar":
            let pessoasEntrando : number = readline.question("Digite quantas pessoas sairam: ");
            car.entrada();
            break;
        case "movimento":
            let fazendoOCarroAndar : number = readline.question("Quantos km o carro vai andar? ");
            car.andando();
            break;
            
        
    }

}

