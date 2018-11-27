import {Calculadora} from './Calculadora';
import {CalculadoraImpl} from './CalculadoraImpl';

let calculadora : Calculadora = new CalculadoraImpl();
console.log(calculadora.soma(15,3));
console.log(calculadora.sub(15,3));
console.log(calculadora.mult(15,3));
console.log(calculadora.div(15,3));