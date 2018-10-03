export class clienteCinema{
    private id : string;
    private fone : string;
    private indice: number;

    constructor(id : string, fone : string, indice : string){
        this.id = id;
        this.fone = fone;
        this.indice = indice;
    }
    public getId() : string{
        return this.id;
    }
    public setId(id : string) : void{
        this.id = id;
    }
    public getFone() : string{
        return this.fone;
    }
    public setFone(fone : string) : void{
        this.fone = fone;
    }

    public toString() : string{
        let cli : string = "";
        cli = "Id"  + this.id + "\n";
        cli = "Fone" + this.fone + "\n";
        cli = "Indice" + this.indice + "\n";
        return cli;
    }
}