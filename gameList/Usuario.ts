import {Jogo} from './Jogo';
import {Pessoas} from './Pessoas';
import {Avaliacao} from './Avaliacao';
import {NotaInvalidaErro} from './NotaInvalidaErro';


export class Usuario extends Pessoas{
    private jogosFav : Array<Jogo>;
    private avaliacoes : Array<Avaliacao>;

    constructor(nome: string,jogosFav: Array<Jogo> = [],avaliacoes : Array<Avaliacao> = []){
        super(nome);
        this.avaliacoes = avaliacoes;
        this.jogosFav = jogosFav;
    }
    public getJogosFav() : Array<Jogo>{
        return this.jogosFav;
    }
    public serJogosFav(jogosFav: Array<Jogo>) : void{
        this.jogosFav = jogosFav;
    }
    public addJogoFav(jogo: Jogo) : void{
        this.jogosFav.push(jogo);
    }
    public removeJogoFav(jogo: Jogo): boolean{
        let indice : number = this.jogosFav.indexOf(jogo);
        if (indice == 1){
            return false;
        }else{
            this.jogosFav.splice(indice,1);
            return true;
        }
    }
    public addAvaliacao(jogo: Jogo, nota: number) : void{
        if(nota > 5 || nota < 0){
            throw new NotaInvalidaErro ("Nota inválida")
        }
        for(let i of this.avaliacoes){
            if(i.getJogos() == jogo){
                i.setNota(nota);
                return;
            }
            
        }
        let a : Avaliacao = new Avaliacao(jogo, nota);
        this.avaliacoes.push(a);
    }
    public mostrarAvaliacoes(){
        let aval : string = " ";
        for(let i of this.avaliacoes){
            aval += i.toString();
        }
        return aval;
    }
}
