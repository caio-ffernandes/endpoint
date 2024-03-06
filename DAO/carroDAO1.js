const Carro = require("../mvc/models/carroModel");
const Database = require("../database");

class CarroDAO{
    #conexao

    constructor(){
        this.#conexao= new Database
    }

    async consultarCarro(){

        const lista_carro = []
        const carros = await this.#conexao.selecionarCarros()
        if(carros){
            for (const carro of carros){
                const objcarro = new Carro()

                objcarro.id = carro.car_id
                objcarro.modelo = carro.modelo
                objcarro.ano = carro.ano
                objcarro.preco = carro.preco
                objcarro.cor = carro.cor

                lista_carro.push(objcarro.toJson())
            }
        }
        return lista_carro
    }
}

module.exports = CarroDAO