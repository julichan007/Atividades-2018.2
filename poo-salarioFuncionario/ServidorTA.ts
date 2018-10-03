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
}