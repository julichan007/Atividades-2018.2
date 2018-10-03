import {Transporte} from "./Transporte";

export class Terrestre extends Transporte{
    private numRodas : number;
    
    public constructor(capacidade : number, numRodas : number){
        super(capacidade);
        this.numRodas = numRodas;
    }
    public getNumRodas() : number{
        return this.numRodas;
    }
    public setNumRodas(numRodas : number) : void{
        this.numRodas = numRodas;
    }

}