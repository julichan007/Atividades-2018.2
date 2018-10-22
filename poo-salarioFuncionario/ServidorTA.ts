import {Funcionario} from './Funcionario';

export class ServidorTA extends Funcionario{
    private nivel : number;

    constructor (nivel : number, nome : string, diarias : number){
        super(nome, diarias);
        this.nivel = nivel;
    }
    public getNivel() : number{
        return this.nivel;
    }
    public setNivel(nivel : number ): void{
        this.nivel  = nivel;
    }
    public calcularSalario() : number{
        let salario : number = 3000 + (300 * this.nivel) + (this.getDiaria()* 100);
        return salario;
    }
    public addDiaria() : boolean{
        if(this.getDiaria() < 1){
            this.setDiaria(this.getDiaria()+ 1);
            return true;
        }
        else{
            return false;
        }
    }
}