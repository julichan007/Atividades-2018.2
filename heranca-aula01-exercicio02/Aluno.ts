import {Pessoa} from './Pessoa';

export class Aluno extends Pessoa{
    private matricula : string;

    constructor(matricula : string, nome : string, cpf : string, dataNasc : string){
        super(nome, cpf, dataNasc);
        this.matricula = matricula;
    }
    public getMatricula() : string{
        return this.matricula;
    }
    public setMatricula(matricula : string) : void{
        this.matricula = matricula;
    }
    
}