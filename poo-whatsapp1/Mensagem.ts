import {Usuario} from './Usuario';

export class Mensagem{
    private texto : string;
    private emissor : Usuario;
    private leitores : Array<Usuario>;

    public constructor(texto : string, emissor : Usuario){
        this.texto =  texto;
        this.emissor = emissor;
        this.leitores = [this.emissor];
    }
   
    public getTexto() : string{
        return this.texto;
    }
    public setTexto(texto : string) : void{
        this.texto = texto;
    }
    public getEmissor() : Usuario{
        return this.emissor;
    }
    public setEmissor(emissor : Usuario): void{
        this.emissor = emissor;
    }
    public getLeitores() : Usuario{
        return this.emissor;
    }
    public setLeitores(leitores: Usuario[]) : void{
        this.leitores = leitores;
    }
    public buscarLeitores(nome : string) : Usuario | undefined{
        for (let i of this.leitores) {
            if (i.getNome() == nome){
                return i;
            }
        }
        return undefined;
    
    }
}