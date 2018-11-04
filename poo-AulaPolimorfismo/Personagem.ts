export class Personagem{
    private nome : string;
    private hp: number;

    public constructor(nome: string, hp: number){
        this.nome = nome;
        this.hp = hp;
    }
    public getNome() : string{
        return this.nome;
    }
    public setNome(nome : string) : void{
        this.nome = nome;
    }
    public getHp() : number{
        return this.hp;
    }
    public setId(hp: number): void{
        this.hp = hp;
    }
    public andar() : void{
        console.log(this.nome + "esta andando");
    }
    public falar(msg : string){
        console.log(this.nome + "diz:" + msg);
    }
    
    
}
