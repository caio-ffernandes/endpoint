const Cliente = require("../mvc/models/clienteModel");
const Database = require("../database");

class clienteDAO{
    #conexao

    constructor(){
        this.#conexao= new Database
    }

    async consultarCliente(){

        const lista_cliente = []
        const clientes = await this.#conexao.selecionarClientes()
        if(clientes){
            for (const cliente of clientes){
                const objcliente = new Cliente()

                objcliente.id = cliente.cliente_id
                objcliente.nome = cliente.nome
                objcliente.email = cliente.email
                objcliente.telefone = cliente.telefone
                

                lista_cliente.push(objcliente.toJson())
            }
        }
        return lista_cliente
    }
}

module.exports = clienteDAO