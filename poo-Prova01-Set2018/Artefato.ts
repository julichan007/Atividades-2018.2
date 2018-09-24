export class Artefato{
    private id : number;
    public nome : string;
    public dataOrigem : string;
    public localOrigem : string;
    private preco : number;

    public constructor(id : number, nome : string, dataOrigem : string, localOrigem : string, preco : number){
        this.id = id;
        this.nome = nome;
        this.dataOrigem = dataOrigem;
        this.localOrigem = localOrigem;
        this.preco = preco;
    }
    public getId() : number{
        return this.id;
    }
    public setId(id : number) : void{
        this.id = id;
    }
    public getPreco() : number{
        return this.preco;
    }
    public setPreco(preco : number) : void{
        if(preco > 0 && preco > this.preco){
            this.preco = preco;
        }
        
    }
    public toString() :string{
        let res : string = "";
        res += "Id" + this.id + '\n';
        res += "Nome: " + this.nome + '\n';
        res += "Data de Origem: " + this.dataOrigem + '\n';
        res += "Local de Origem: " + this.localOrigem + '\n';
        res += "Preco: " + this.preco + '\n';
        return res;
    }
}