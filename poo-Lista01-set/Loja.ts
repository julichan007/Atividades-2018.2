import {Roupa} from "./Roupa";
import {Cliente} from "./Cliente";

export class Loja{
    private estoque : Array<Roupa>;
    private clientes : Array<Cliente>;

    public constructor(estoque : Array<Roupa>,clientes : Array<Cliente>){
		this.estoque = estoque;
		this.clientes = clientes;
	}
	public getEstoque() : Array<Roupa> {
		return this.estoque;
}
	public setEstoque(estoque : Array<Roupa>) : void {
		this.estoque = estoque;
	}
	public getClientes() : Array<Cliente> {
		return this.clientes;
	}
	public setClientes(clientes : Array<Cliente>) : void {
		this.clientes = clientes;
	}
	public cadastrarCliente(cli : Cliente) : void {
		this.clientes.push(cli);
    }
	public cadastrarRoupa(rou : Roupa) : void {
		this.estoque.push(rou);
	}
	public venderRoupa(cli : Cliente, rou : Roupa) : boolean {
		if(rou.getQuantidade() > 0){
		rou.setQuantidade(rou.getQuantidade()-1);
			cli.comprar(rou);
			return true;
			} else {
		return false;
		}
	}
	public buscarRoupa(codigo : string) : 	Roupa | undefined {
		for(let i of this.estoque){
			if(i.getCodigo() == codigo){
				return i;
			}
		}
		return undefined;
	}
	public buscarCliente(cpf : string) :  Cliente | undefined {
		for(let i of this.clientes){
			if(i.getCpf() == cpf){
				return i;
			}
		}
		return undefined;
	}
}
