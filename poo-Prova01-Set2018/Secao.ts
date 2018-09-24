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
    public getArtefatos() : Array<Artefato>{
        return this.artefatos;
    }
    public setArtefatos(artefatos : Array<Artefato>) : void{
        this.artefatos = artefatos;
    }
    public buscar(id : number) : Artefato | undefined{
        for(let a of this.artefatos ){
            if(a.getId() == id){
                return a;
            }
        }
        return undefined;
    }
    public inserir(a : Artefato) : void{
        this.artefatos.push(a);
    }
    public toString() : string{
        let res : string = "";
        res += "Codigo: " + this.codigo + '\n';
        res += "Descrição: " + this.descricao + '\n';
        res += "Ano: " + this.ano + '\n';
        res += "Artefato: " + this.artefatos + '\n';
        return res;
    }

}