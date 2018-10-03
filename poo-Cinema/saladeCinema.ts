import {clienteCinema} from './clienteCinema';
export class saladeCinema{
    private nAssentos : number;
    private clientes : Array<clienteCinema>

    public constructor(nAssentos : number){
        this.nAssentos = nAssentos;
        this.clientes = []
        for(let i = 0; i < this.nAssentos; i++){
            this.clientes.push(null);
        }
    }

    public mostrar(): string {
        let mos : string = ""
        for (let i = 0; i < this.clientes.length;i++){
                if(this.clientes[i] == null){
                    mos += "-";
                }
                else{
                    mos += this.clientes[i]
                }
        }
        return mos;

    }
    public reserva(id: string, fone : string, indice : number) : void{
        if (indice < 0 || indice >= this.nAssentos){
            console.log("Cadeira nao esta no cinema")
        }else{
            let achouId : boolean = false;
            for (let i = 0; i < this.clientes.length; i++){
                let cliente : clienteCinema =  this.clientes[i];
                if(cliente != null){
                    if (clienteCinema.getId() == id){
                        console.log("cliente ja esta no cinema");
                        achouId = true;
                    }
                }
            }
            if (achouId == false){
                let clien : clienteCinema = new clienteCinema(id,fone,indice);
                this.clientes[indice] = clien;

            }
        }
    }
}
public cancela(id : string) : void{
        let achouId : boolean = false;
        for (let i =0; i < this.clientes.length; i++){
            let cliente : clienteCinema = this.clientes[i];
            if (cliente != null){
                if (cliente.getId() == id){
                    this.clientes[i] = null;
                    achouId = true;
                }
            }

        }
        if(achouId == true){
            console.log("Reserva cancelada");
        }else{
            console.log("Id do cliente nao encontrada");
        }
    }
}

