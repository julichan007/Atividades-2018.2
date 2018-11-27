export class NotaInvalidaErro implements Error{
    public name : string;
    public message : string;

    public constructor(message : string = ""){
        this.name = "Nota maior que o permitido.";
        this.message = message;
    }
}
