import {Personagem} from "./Personagem";

export class Guerreiro extends Personagem{
    private forca : number;

    public constructor(nome: string, hp : number, forca : number){
        super(nome, hp);
        this.forca = forca;
    }

    public falar(msg : string) : void{
        console.log(this.nome + "diz" + msg.toUpperCase() + "!!!");
    }

    public atacar(p: Personagem) : void{
        console.log(this.nome + "corta" + p.getNome());
        p.levarDano(this.forca);
    }

    
}
