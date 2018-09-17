export class Aluno {
    constructor(nome, idade, curso, ira) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.ira = ira;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        if (idade >= 0 && idade == Math.floor(idade)) {
            this.idade = idade;
        }
    }
    getCurso() {
        return this.curso;
    }
    setCurso(curso) {
        this.curso = curso;
    }
    getIra() {
        return this.ira;
    }
    setIra(ira) {
        if (ira >= 0 && ira <= 10) {
            this.ira = ira;
        }
    }
    estudar(materia) {
        console.log("estudando" + materia);
    }
    matricular(disciplina) {
        console.log("Matriculando nas disciplina " + disciplina);
    }
    toString() {
        let res = "";
        res += "Nome " + this.nome + "\n";
        res += "Idade" + this.idade + "\n";
        res += "Curso" + this.curso + "\n";
        res += "Ira" + this.ira + "\n";
        return res;
    }
}
