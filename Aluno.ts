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
        if (idade >= 0 && idade == Math.floor(idade)){
            this.idade = idade;
        }
        
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
        if(ira >= 0 && ira <= 10){
            this.ira = ira;
        }  
    }

    public estudar(materia : string) : void{
        console.log("estudando" + materia);
    }

    public matricular(disciplina : string) : void{
        console.log("Matriculando nas disciplina " + disciplina)
    }

    public toString() : string{
        let res : string = "";
        res += "Nome " + this.nome + "\n";
        res += "Idade" + this.idade + "\n";
        res += "Curso" + this.curso + "\n";
        res += "Ira" + this.ira + "\n";
        return res;
    }
}