export  class Aluno{
    private nome : string;
    private idade : number;
    private curso : string;
    private ira: number;


    public constructor(nome: string, idade: number, curso : string,ira: number){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.ira = ira;
    }

    public getNome() : string {
        return this.nome;
    }

    public setNome(nome : string) : void{
        this.nome = nome;
    }

    public getIdade() : number {
        return this.idade;
    } 

    public setIdade(idade: number) : void{
        this.idade = idade;
    }

    public getCurso() : string{
        return this.curso;
    }

    public setCurso(curso : string) : void{
        this.curso = curso;
    }

    public getIra() : number{
        return this.ira;
    }

    public setIra(ira : number) : void{
        this.ira = ira;
    }

    
}