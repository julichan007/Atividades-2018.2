import {Funcionario} from './Funcionario';

export class Professor extends Funcionario{
    private classe : string;

    constructor(classe : string, nome : string, diaria : number){
        super(nome,diaria);
        this.classe = classe;
    }
    public getClasse() : string{
        return this.classe;
    }

    public setClasse(classe : string) : void{
        this.classe = classe;
    }
    public calcularSalario() : number{
        if(this.classe == "A"){
            return 3000 + (this.getDiaria() * 100);
        }
        else if (this.classe == "B"){
            return 5000 + (this.getDiaria() * 100);
        }
        else if (this.classe =  "C"){
            return 7000 + (this.getDiaria() * 100);
        }
        else if (this.classe = "D"){
            return 9000 + (this.getDiaria() * 100);
        }
        return 11000 + (this.getDiaria() * 100);
        
    }
    public addDiaria() : boolean{
        if(this.getDiaria() < 2){
            this.setDiaria(this.getDiaria() + 1);
        return true;
        }
        else{
            return false;
        }
    }
}