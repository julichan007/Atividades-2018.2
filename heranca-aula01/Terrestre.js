import { Transporte } from "./Transporte";
export class Terrestre extends Transporte {
    constructor(capacidade, numRodas) {
        super(capacidade);
        this.numRodas = numRodas;
    }
    getNumRodas() {
        return this.numRodas;
    }
    setNumRodas(numRodas) {
        this.numRodas = numRodas;
    }
}
