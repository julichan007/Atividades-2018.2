declare function require(msg : string) : any;
var readline = require('readline-sync');


let lista: string[] = ['A','B','C','D','E']; // criando uma lista comum com 5 items do tipo string.

lista.push('F'); //adiciona um item no final da lista.

console.log(lista.indexOf('D')); // lista.indexOf() procura o indice de um item e retorna a posição do item.

lista.pop(); // apaga o ultimo item da lista.

lista.shift(); //remove um item do inicio da lista, ou seja o primeiro item

lista.unshift('A'); // Adiciona um item ao inicio da lista

lista.splice(1); //remove um item pela posição.

console.log(lista); // imprimindo o que foi feito até agora

//bons estudos seus lindos <3




