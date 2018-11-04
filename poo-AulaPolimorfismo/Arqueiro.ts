import {Personagem} from "./Personagem";

export class Arqueiro extends Personagem{
    private destreza : number;

    public constructor(nome : string, hp: number, destreza : number){
        super(nome, hp);
        this.destreza = destreza;
    }
    public atacar(p : Personagem) : void{
        console.log(this.nome + "acerta uma flecha em"+ p.getNome());
        p.levarDano(this.destreza);
    }
}