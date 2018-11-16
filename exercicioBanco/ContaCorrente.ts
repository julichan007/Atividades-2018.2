import {Conta} from './Conta';

export class ContaCorrente extends Conta{
    
    public constructor(numeroConta: string, saldo : number){
        super(numeroConta, saldo);
    }
    public valorizar() : void{
        this.setSaldo(this.getSaldo() *(101.3)/100);
    }


}