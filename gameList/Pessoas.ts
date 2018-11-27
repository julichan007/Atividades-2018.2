export abstract class Pessoas{
    private nome : string;
    
    public constructor(nome: string){
        this.nome = nome;
    }
    public getNome() : string{
        return this.nome;
    }
    public setNome(nome:string) : void{
        this.nome = nome;
    }

}