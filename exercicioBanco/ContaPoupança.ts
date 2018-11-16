import {Conta} from './Conta';

export class ContPoupança extends Conta{
    
    public constructor(numeroConta: string, saldo : number){
        super(numeroConta, saldo);
    }
    public valorizar() : void{
        this.setSaldo(this.getSaldo() *(600.5)/100);
    }


}