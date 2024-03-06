const Compras = require("../mvc/models/comprasModel");
const Database = require("../database");

class ComprasDAO{
    #conexao

    constructor(){
        this.#conexao= new Database
    }

    async consultarCompras(){

        const lista_compra = []
        const compras = await this.#conexao.selecionarCompras()
        if(compras){
            for (const compra of compras){
                const objcompra = new Compras()

                objcompra.id = compra.compra_id
                objcompra.car = compra.car_id
                objcompra.cliente = compra.cliente_id
                objcompra.data = compra.data_compra
                

                lista_compra.push(objcompra.toJson())
            }
        }
        return lista_compra
    }
}

module.exports = ComprasDAO