class Carro {
    constructor(marca, ano, velocidade) {
        this.velocidade = velocidade;
        this.marca = marca;
        this.ano = ano;
    }
    acelerar() {
        this.velocidade += 10;
    }
    parar() {
        this.velocidade = 0;
    }
    frear() {
        this.velocidade -= 10;
    }
}
let c1 = new Carro("Fiat", 2018, 0);
console.log(c1);
let c2 = new Carro("Ford", 2017, 20);
console.log(c2);
