export class Transporte{
    private capacidade : number;

    public constructor(capacidade : number){
        this.capacidade = capacidade;
    }
    public getCapacidade() {
        return this.capacidade;
    }
    public setCapacidade(capacidade : number) : void{
        this.capacidade = capacidade;
    }
}