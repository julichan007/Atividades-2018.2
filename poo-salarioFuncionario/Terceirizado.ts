import {Funcionario} from './Funcionario';

export class Terceirizado extends Funcionario{
    private insalubre : boolean;
    private horas : number;

    constructor(insalubre : boolean, horas : number , nome : string, diarias : number){
        super(nome, diarias);
        this.insalubre =  insalubre;
        this.horas = horas;
    }
    public getInsalubre() : boolean{
        return this.insalubre;
    }
    public setInsalubre(insalubre : boolean) : void{
        this.insalubre = insalubre;
    }
    public getHoras() : number{
        return this.horas;
    }
    public setHoras(horas : number) : void{
        this.horas = horas;
    }
}