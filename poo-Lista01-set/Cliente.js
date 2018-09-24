export class Cliente {
    constructor(nome, cpf, roupas) {
        this.nome = nome;
        this.cpf = cpf;
        this.roupas = roupas;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getRoupas() {
        return this.roupas;
    }
    setRoupas(roupas) {
        this.roupas = roupas;
    }
    comprar(rou) {
        this.roupas.push(rou);
    }
    buscar(codigo) {
        for (let i of this.roupas) {
            if (codigo == i.getCodigo()) {
                return true;
            }
            return false;
        }
    }
}
