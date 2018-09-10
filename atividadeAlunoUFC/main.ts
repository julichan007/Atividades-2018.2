import {Aluno} from '..\Aluno';

let aluno1 : Aluno = new Aluno("Juliana", 33,"DD",7.5);
console.log(aluno1.toString());
aluno1.matricular("Direção de Arte");
aluno1.estudar("POO");
aluno1.setIdade(33.3);
aluno1.setIdade(-3);
aluno1.setIdade(18);
console.log(aluno1);