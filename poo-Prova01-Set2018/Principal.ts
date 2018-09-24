declare function require(msg : string): any;
var readline = require('readline-sync');
import {Secao} from "./Secao";
import {Artefato} from "./Artefato";

let codigoSecao : number = Number(readline.question());
let anoSecao : number = Number(readline.question());
let descricaoSecao : string = readline.question();
let s : Secao = new Secao(codigoSecao,descricaoSecao,anoSecao,[]);
    for(let i = 0; i < 3; i ++){
        let id : number = Number(readline.question());
        let nome : string = readline.question();
        let preco : number = Number(readline.question());
        let a : Artefato = new Artefato(id, nome, "23-2-1004","Quixadá",preco);
        s.inserir(a);
    }
        let identificador : number = Number(readline.question());
        let a : Artefato | undefined = s.buscar(identificador);
        if(a == undefined){
            console.log("o artefato nao esta");
        }else{
            a.setPreco(200);
            a.setPreco(100);
            console.log(a.getPreco());
        }

    