import { Terrestre } from './Terrestre';
export class Automovel extends Terrestre {
    constructor(capacidade, numRodas, cor, numPortas, placa) {
        super(capacidade, numRodas);
        this.cor = cor;
        this.numPortas = numPortas;
        this.placa = placa;
    }
    getCor() {
        return this.cor;
    }
    setCor(cor) {
        this.cor = cor;
    }
    getNumPorta() {
        return this.numPortas;
    }
    setNumPortas(numPortas) {
        this.numPortas = numPortas;
    }
    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
}
