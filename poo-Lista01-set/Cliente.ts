import {Roupa} from './Roupa';

export class Cliente{
    private nome : string;
    private cpf : string;
    private roupas : Array<Roupa>;

    public constructor(nome : string, cpf : string, roupas : Array <Roupa>){
        this.nome = nome;
        this.cpf = cpf;
        this.roupas = roupas;
    }
    public getNome() : string{
        return this.nome;
    }
    public setNome(nome : string) : void{
        this.nome = nome;
    }
    public getCpf() : string{
        return this.cpf;
    }
    public setCpf(cpf : string) : void{
        this.cpf = cpf;
    }
    public getRoupas() : Roupa[] {
        return this.roupas;
    }
    public setRoupas(roupas : Roupa[]) : void{
        this.roupas = roupas;
    }
    public comprar(rou : Roupa) : void{
        this.roupas.push(rou);
    }
    public buscar(codigo : string) : boolean{
        for(let i of this.roupas){
            if(codigo == i.getCodigo()){
                return true;
            }
            return false;
        }
    }
}