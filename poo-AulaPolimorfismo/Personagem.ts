export class Personagem{
    private nome : string;
    private hp: number;

    public constructor(nome: string, hp: number){
        this.nome = nome;
        this.hp = hp;
    }
    public andar() : void{
        console.log(this.nome + "esta andando";
    }
    public falar(msg : string){
        console.log(this.nome + "diz:" + msg);
    }
    
}
