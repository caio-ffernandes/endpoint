
class Compras{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

   #car
    get car() {
        return this.#car
    }
    set car(value) {
        this.#car = value
    }
   #cliente
    get cliente() {
        return this.#cliente
    }
    set cliente(value) {
        this.#cliente = value
    }
   #data
    get data() {
        return this.#data
    }
    set data(value) {
        this.#data = value
    }
   
  
  
    constructor(car, cliente, data){
        this.#car = car
        this.#cliente = cliente
        this.#data = data
    }

     
    toJson(){
        return {
            "id": this.#id,
            "car": this.#car,
            "cliente": this.#cliente,
            "data": this.#data

        }
    }
}


module.exports = Compras
