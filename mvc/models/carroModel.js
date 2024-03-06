
class Carro{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

   #modelo
    get modelo() {
        return this.#modelo
    }
    set modelo(value) {
        this.#modelo = value
    }
   #ano
    get ano() {
        return this.#ano
    }
    set ano(value) {
        this.#ano = value
    }
   #preco
    get preco() {
        return this.#preco
    }
    set preco(value) {
        this.#preco = value
    }
   #cor    
    get cor() {
        return this.#cor
    }
    set cor(value) {
        this.#cor = value
    }
  
  
    constructor(modelo, ano, preco, cor){
        this.#modelo = modelo
        this.#ano = ano
        this.#preco = preco
        this.#cor = cor
    }

     
    toJson(){
        return {
            "id": this.#id,
            "nome": this.#modelo,
            "Codigo": this.#ano,
            "validade": this.#preco,
            "valor": this.#cor

        }
    }
}


module.exports = Carro