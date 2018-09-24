import {Artefato} from "./Artefato";

export class Secao{
    private codigo : number;
    public descricao : string;
    private ano : number;
    private artefatos : Array<Artefato>;

    public constructor(codigo : number, descricao : string, ano : number, artefatos : Array<Artefato>){
        this.codigo = codigo;
        this.descricao= descricao;
        this.ano = ano;
        this.artefatos = artefatos;
    }
    public getCodigo() : number{
        return this.codigo;
    }
    public setCodigo(codigo : number) : void{
        this.codigo = codigo;
    }
    public getArtefatos()

}