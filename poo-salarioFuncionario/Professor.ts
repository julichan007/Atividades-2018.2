import {Funcionario} from './Funcionario';

export class Professor extends Funcionario{
    private classe : string;

    constructor(classe : string, nome : string){
        super(nome,diarias);
        this.classe = classe;
    }
    public getClasse() : string{
        return this.classe;
    }

    public setClasse(classe : string) : void{
        this.classe = classe;
    }
}