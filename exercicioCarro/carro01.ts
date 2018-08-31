class Carro{
    marca : string;
    ano : number;
    velocidade : number;
    constructor(marca: string, ano : number, velocidade : number){
        this.velocidade = velocidade;
        this.marca = marca;
        this.ano = ano;
    }
    acelerar() : void{
        this.velocidade += 10;
    }
    parar() : void{
        this.velocidade = 0;
    }
    frear() : void{
        this.velocidade -= 10;
    }
}
let c1 : Carro = new Carro ("Fiat", 2018,0);
console.log(c1);
let c2 : Carro = new Carro("Ford", 2017, 20);
console.log(c2);
