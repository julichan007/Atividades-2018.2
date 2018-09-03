declare function require(msg: string) : any;
var readline = require('readline-sync');

import {Calculadora} from"./Calculadora";

let calc : Calculadora = new Calculadora();
calc.carga = 2;

while(true){
    let possiveisComandos : string = "" + 
        "show - mostrar a quantidade de baterias\n"+
        "soma - somar dois números\n" +
        "sub - subtrair dois números\n" +
        "mult - multiplicar dois números\n" +
        "div - dividir dois números\n" +
        "recarregar - recarregar a baterias\n"+
        "parar - sair do programa\n";
    console.log(possiveisComandos);
    let comando : string = readline.question("digite um comando:");
    if(comando == "parar"){
        console.log("Até a próxima");
        break;
    }
    switch(comando){
        case "show": console.log(calc.carga);
            break;
        case "soma": 
            if(!calc.temCarga()){
                console.log("Descarregada.");
    
            }else{
                let n1 : number = Number(readline.question("Digite o primeiro número: "));
                let n2 : number = Number(readline.question("Digite o segundo número: ")) ;
                console.log(calc.somar(n1,n2));
                calc.gastarCarga();
            }
            break;
        case "sub": 
            if(!calc.temCarga()){
                console.log("Descarregado");         
            }else{
                let n1 : number = Number(readline.question("digite o primeiro número: "));
                let n2 : number = Number(readline.question("Digite o segundo númro: "));
                console.log(calc.sub(n1,n2));
                calc.gastarCarga();
            }
            break;
        case "multi":
            if(!calc.temCarga()){
                console.log("Descarregada!");
            }else{
                let n1 : number = Number(readline.question("Digite o primeiro número: "));
                let n2 : number = Number(readline.question("Digite o segundo número: "));
                console.log(calc.mult(n1,n2));
                calc.gastarCarga();
            }
            break;
        case "div":
            if(!calc.temCarga()){
                console.log("Descarregada!");
            }else{
                let n1 : number = Number(readline.question("Digite o primeiro número: "));
                let n2 : number = Number(readline.question("Digite o segundo número: "));
                let resposta : number | undefined = calc.div(n1,n2);
                if(resposta == undefined){
                    console.log("Divisão inválida");
                }else{
                    console.log(resposta);
                }
                calc.gastarCarga();
            }
            break;
        case "recarregar":
            let valor: number = Number(readline.question("Digite a quantidade de carga: "));
            calc.recarregar(valor);
            console.log("Recarregado.");
            break;
        default:
            console.log("Comando inválido");    

    }

        


}