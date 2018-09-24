export class Roupa {
    constructor(tipo, cor, codigo, tamanho, quantidade) {
        this.tipo = tipo;
        this.cor = cor;
        this.codigo = codigo;
        this.tamanho = tamanho;
        this.quantidade = quantidade;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getCodigo() {
        return this.codigo;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    getTamanho() {
        return this.tamanho;
    }
    setTamanho(tamanho) {
        this.tamanho = tamanho;
    }
    getQuantidade() {
        return this.quantidade;
    }
    setQuantidade(quantidade) {
        this.quantidade = quantidade;
    }
    toString() {
        let s = "";
        s = "Tipo: " + this.tipo + "\n";
        s = "Cor: " + this.cor + "\n";
        s = "Tamanho: " + this.tamanho + "\n";
        s = "Codigo: " + this.codigo + "\n";
        s = "Quantidade: " + this.codigo + "\n";
        return s;
    }
}
