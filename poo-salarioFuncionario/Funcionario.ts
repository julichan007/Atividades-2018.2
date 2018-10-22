export class Funcionario{
    private nome : string;
    private diaria : number;

    constructor(nome : string, diaria : number) {
        this.nome = nome;
    }
    public getNome() : string{
        return this.nome;
    }

    public setNome(nome : string) : void{
        this.nome = nome;
    }
    public getDiaria() : number{
        return this.diaria;
    }
    public setDiaria(diarias : number) : void{
        this.diaria = diarias;
    }
    public calcularSalario() : number{
        return 0;
    }
    public addDiaria() : boolean{
        return false;
    }
}