declare function require(msg :string ): any ;
var readline = require ('readline-sync');

import {Funcionario} from "./Funcionario";
import {Professor} from "./Professor";
import {ServidorTA} from "./ServidorTA";
import {Terceirizado} from "./Terceirizado";

let funcionarios : Array<Funcionario> = [];
let comando : string = readline.question("Digite um comendo: ");
if (comando = "addProf"){
    let n :string =  readline.question("Digite um nome: ");
    let c : string = readline.question("Digite a classe: ");
    let prof : Professor = new Professor( n,"Analis",12);
}
else if (comando == "addSta"){
    let nv :  number = readline.question("Digite o nivel: ");
    let sta : ServidorTA = new ServidorTA (0,"Anoisr", 12);
    funcionarios.push(sta);
}
else if (comando == "addTer"){
    nome : readline.question("Digite o nome:");
    let horas : number = readline.question("Digite as horas trabalhadas: ");
    let insalubre : string = readline.question("É insalubre? Diga se sim  ou não ");
    let terc : Terceirizado = new Terceirizado(true,horas, "Anahs", 12);
    if (insalubre == "não"){
        terc.setInsalubre(false);
    }
    funcionarios.push(terc);
}
else if (comando == "show"){
    let nome =  readline.question("digite o nome do funcionario: ");
    let f : Funcionario | undefined = undefined;
    for (let i of funcionarios){
        if (i.getNome() == nome){
            f = i;
        }
    }
    if (f == undefined){
        console.log("Não exite");
    }
    else{
        console.log(f);
    }

}
let menu : string =  "" +
        "1 - incluir funcionario " + "\n" +
        "2 - mostrar funcionario " + "\n" +
        "3 - remover funcionario" + "\n" +
        ""
while(true){
    console.log(menu);
    let comando : string = readline.question("Digite um comando ");
    switch(comando){
        case "1":
            break;
        case "2":
            break;
        case "3":
            break;
    }
}
