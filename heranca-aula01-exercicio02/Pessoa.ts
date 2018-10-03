export class Pessoa{
    private nome : string;
    private cpf : string;
    private dataNasc : string;

    public constructor(nome : string, cpf : string, dataNasc : string){
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
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

    public getDataNasc() : string{
        return this.dataNasc;
    }

    public setDataNasc(dataNasc : string) : void{
        this.dataNasc = dataNasc;
    }
}