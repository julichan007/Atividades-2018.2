import {Pessoa} from './Pessoa';

export class Funcionario extends Pessoa{
    private numFuncionario : number;

    constructor(numFuncionario : number,nome : string, cpf : string, dataNasc : string){
        super(nome, cpf, dataNasc);
        this.numFuncionario = numFuncionario;
    }
    public getNumFuncionario() : number{
        return this.numFuncionario;
    }
    public setNumFuncionario(numFuncionario : number) : void{
        this.numFuncionario = numFuncionario;
    }
    
}