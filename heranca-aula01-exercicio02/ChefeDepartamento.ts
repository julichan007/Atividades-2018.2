import {Pessoa} from './Pessoa';

export class ChefeDepartamento extends Pessoa{
    private matriculaSetor : string;

    constructor(matriculaSetor : string, nome : string, cpf: string, dataNasc : string){
        super(nome, cpf, dataNasc);
        this.matriculaSetor = matriculaSetor;
    }
    public getMatriculaSetor() : string{
        return this.matriculaSetor;
    }

    public setMatriculaSetor(matriculaSetor : string) : void{
        this.matriculaSetor = matriculaSetor;
    }
}