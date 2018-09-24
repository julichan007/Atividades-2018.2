export class Loja {
    constructor(estoque, clientes) {
        this.estoque = estoque;
        this.clientes = clientes;
    }
    getEstoque() {
        return this.estoque;
    }
    setEstoque(estoque) {
        this.estoque = estoque;
    }
    getClientes() {
        return this.clientes;
    }
    setClientes(clientes) {
        this.clientes = clientes;
    }
    cadastrarCliente(cli) {
        this.clientes.push(cli);
    }
    cadastrarRoupa(rou) {
        this.estoque.push(rou);
    }
    venderRoupa(cli, rou) {
        if (rou.getQuantidade() > 0) {
            rou.setQuantidade(rou.getQuantidade() - 1);
            cli.comprar(rou);
            return true;
        }
        else {
            return false;
        }
    }
    buscarRoupa(codigo) {
        for (let i of this.estoque) {
            if (i.getCodigo() == codigo) {
                return i;
            }
        }
        return undefined;
    }
    buscarCliente(cpf) {
        for (let i of this.clientes) {
            if (i.getCpf() == cpf) {
                return i;
            }
        }
        return undefined;
    }
}
