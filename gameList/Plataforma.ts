
export class Plataforma{
    private nomeP : string;
    private desenvolvedor: string;
    private ano: number;

    public constructor(nomeP : string, desenvolvedor: string, ano : number){
        this.nomeP = nomeP;
        this.desenvolvedor = desenvolvedor;
        this.ano = ano;
    }
    public getNomeP() : string{
        return this.nomeP;
    }
    public setNomeP(nomeP : string) : void{
        this.nomeP = nomeP;
    }

}