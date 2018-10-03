import {Terrestre} from  './Terrestre';

export class Automovel  extends Terrestre{
    private cor : string;
    private numPortas : number;
    private placa : string;

    constructor(capacidade : number, numRodas : number, cor : string, numPortas : number, placa : string){
        super(capacidade, numRodas);
        this.cor = cor;
        this.numPortas = numPortas;
        this.placa = placa;
    }

    public getCor() : string{
        return this.cor;
    }

    public setCor(cor : string) : void{
        this.cor = cor;
    }

    public getNumPorta() : number{
        return this.numPortas;
    }

    public setNumPortas(numPortas : number) : void{
        this.numPortas =  numPortas;
    }

    public getPlaca() : string{
        return this.placa;
    }
    
    public setPlaca(placa : string) : void{
        this.placa = placa;
    }
    
}