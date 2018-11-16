
export class Genero{
    private descricao : string;

    public constructor(descricao : string){
        this.descricao = descricao;
    }
    public getDescricao() : string{
        return this.descricao;
    }
    public setDescricao(descricao : string) : void{
        this.descricao = descricao;
    }
}