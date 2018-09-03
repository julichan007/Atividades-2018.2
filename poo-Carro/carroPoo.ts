export class CarroP{
    combustivel : number;
    combustivelMax : number;
    pessoas : number;
    pessoasMax : number;
    qtdkm : number;
    
    constructor(){
        this.combustivel = 0;
        this.combustivelMax = 10;
        this.pessoas = 0;
        this.pessoasMax = 2;
        this.qtdkm = 0;
    }
    show() : void {
        console.log(this.pessoas, this.combustivel, this.qtdkm);
    }
    entrada() : boolean{
        if(this.pessoas < this.pessoasMax){
            this.pessoas += 1;
            return true;
        }else{
            console.log("failure: limite de pessoas atingido");
            return false;
        }
    }
    saida() : boolean{
        if (this.pessoas > 0) {
            this.pessoas -= 1;
            return true;
        }else{
            console.log("failure: nao ha ninguem no carro");
            return false;
        } 
    }

    tanque() : void{
        this.combustivel += this.combustivel;
        if(this.combustivel > this.combustivelMax){
            this.combustivel = this.combustivelMax;
        }
    }
    andando(distancia : number) : boolean{
        if(this.pessoas == 0){
            console.log("failure: nao ha ninguem no carro");
        }
        if (this.combustivel < (this.qtdkm / 10) ){
            console.log("failure: gasolina insuficiente");
        }else{
            this.combustivel = this.combustivel - this.qtdkm / 10;
            this.qtdkm = this.qtdkm + this.qtdkm;
            return true;
            }
        return false;
            
    }
}

