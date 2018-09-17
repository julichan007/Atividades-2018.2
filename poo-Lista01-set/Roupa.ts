export class Roupa{
    private tipo : string;
    private cor : string;
    private codigo : string;
    private tamanho : string;
    private quantidade : number;

    public constructor(tipo : string, cor : string, codigo : string, tamanho : string, quantidade :  number){
        this.tipo = tipo;
        this.cor = cor;
        this.codigo = codigo;
        this.tamanho = tamanho;
        this.quantidade = quantidade;
    }
    public getTipo() : string{
        return this.tipo;
    }
    public setTipo(tipo : string) : void{
        this.tipo = tipo;
    }
    public getCor() : string{
        return this.cor;
    }
    public setCor(cor : string) : void{
        this.cor = cor;
    }
    public getCodigo() : string{
        return this.codigo;
    }
    public setCodigo(codigo : string) : void{
        this.codigo = codigo;
    }
    public getTamanho() : string{
        return this.tamanho;
    }
    public setTamanho(tamanho : string) : void{
        this.tamanho = tamanho;
    }
    public getQuantidade(): number{
        return this.quantidade;
    }
    public setQuantidade(quantidade : number) : void{
        this.quantidade = quantidade;
    }
}