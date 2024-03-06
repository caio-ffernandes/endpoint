
class Cliente{

    #id

    get id() {
        return this.#id
    }
    set id(value) {
        this.#id = value
    }

   #nome
    get nome() {
        return this.#nome
    }
    set nome(value) {
        this.#nome = value
    }
   #email
    get email() {
        return this.#email
    }
    set email(value) {
        this.#email = value
    }
   #telefone
    get telefone() {
        return this.#telefone
    }
    set telefone(value) {
        this.#telefone = value
    }
   
  
  
    constructor(nome, email, telefone){
        this.#nome = nome
        this.#email = email
        this.#telefone = telefone
    }

     
    toJson(){
        return {
            "id": this.#id,
            "nome": this.#nome,
            "email": this.#email,
            "telefone": this.#telefone

        }
    }
}


module.exports = Cliente