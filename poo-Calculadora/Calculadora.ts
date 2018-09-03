export class Calculadora{
    carga : number;
    

    temCarga() : boolean{
        if(this.carga > 0) return true;
        else return false;
    }
    gastarCarga() : void{
        this.carga--;
    }
    recarregar(valor : number) : void{
        //this.carga += valor;
        // if(this.carga > 5)  this.carga = 5;
        if(this.carga + valor > 5){
            this.carga = 5;
        }else{
            this.carga += valor;
        }
    }

    somar(a: number, b : number) : number{
        return a + b;
    }
    sub(a : number, b : number) : number{
        return a - b;
    }
    mult(a : number, b : number) : number{
        return a * b ;
    }
    div(a : number, b: number): number | undefined{
        if(b == 0){
            return undefined;
        }else{
            return a / b;
        }
           
    }
}