export abstract class Conta{
    private numeroConta : string;
    private saldo : number;

    public constructor(numeroConta : string, saldo : number) {
        this.numeroConta = numeroConta;
        this.saldo = 0;
        
    }
    public getNumeroConta(): string{
        return this.numeroConta;
    }
    public setNumeroConta(numeroConta: string): void{
        this.numeroConta = numeroConta;
    }
    public getSaldo(): number{
        return this.saldo;
    }
    public setSaldo(saldo: number) : void{
        this.saldo = saldo;
    }
    public abstract valorizar() : void;

}