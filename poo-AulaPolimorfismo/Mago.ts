import {Personagem} from "./Personagem";

export class Mago extends Personagem{
    private inteligencia : number;

    public constructor(nome : string, hp : number, inteligencia : number){
        super(nome, hp);
        this.inteligencia = inteligencia;
    }
    public atacar(p : Personagem) : void{
        console.log(this.nome + "lanca bola de fogo em " + p.getNome());
        p.levarDano(this.inteligencia);
    }
}