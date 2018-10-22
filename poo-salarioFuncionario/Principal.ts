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
    let prof : Professor = new Professor( n,0,c);
}
else if (comando == "addSta"){
    let nv :  number = readline.question("Digite o nivel: ");
    let sta : ServidorTA = new ServidorTA (n,0, nv);
    funcionarios.push(sta);
}