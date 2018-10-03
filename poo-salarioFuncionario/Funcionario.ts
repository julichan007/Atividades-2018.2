export class Funcionario{
    private nome : string;
    private diarias : number;

    constructor(nome : string, diarias : number) {
        this.nome = nome;
    }
    public getNome() : string{
        return this.nome;
    }

    public setNome(nome : string) : void{
        this.nome = nome;
    }
    public getDiarias() : number{
        return this.diarias;
    }
    public setDiarias(diarias : number) : void{
        this.diarias = diarias;
    }
    public calcularSalario() : number{

    }
}