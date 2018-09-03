export class Calculadora {
    temCarga() {
        if (this.carga > 0)
            return true;
        else
            return false;
    }
    gastarCarga() {
        this.carga--;
    }
    recarregar(valor) {
        //this.carga += valor;
        // if(this.carga > 5)  this.carga = 5;
        if (this.carga + valor > 5) {
            this.carga = 5;
        }
        else {
            this.carga += valor;
        }
    }
    somar(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mult(a, b) {
        return a * b;
    }
    div(a, b) {
        if (b == 0) {
            return undefined;
        }
        else {
            return a / b;
        }
    }
}
