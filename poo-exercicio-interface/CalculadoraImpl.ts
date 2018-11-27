import {Calculadora} from './Calculadora';

export class CalculadoraImpl implements Calculadora{
    public contructor (){
    public soma(a : number, b : number) : number{
            return a + b;
    }
    public sub(a : number, b: number) : number{
            return a -b ;
    }
    public mult(a: number, b: number): number{
            return a*b;
    }
    public div(a: number,b: number ): number{
            return a/b;
    }
}