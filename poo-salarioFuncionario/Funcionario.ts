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
    public cadastrarFuncionario(nome: string): void{

    }
    public mostrarFuncionario(nome: string): void{

    }
    public removerFuncionario(nome: string): void{

    }
    public toString() : any{
        let func : string = "" + "\n"+
        "Nome: " + this.nome + "\n" +
        "Diarias: " + this.diaria ;
        return func;
    }
}