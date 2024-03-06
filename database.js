const mysql = require("mysql2");

class Database {
    #connection;

    constructor() {
     
        this.#connection = mysql.createPool({
            host: "localhost",
            user: "root",
            password: "",
            database: "concessionaria",
        }).promise();
    }

    async selecionarCarros() {
        const carrosData = await this.#connection.query("SELECT * FROM carros;");
        return carrosData[0];
    }

    async selecionarClientes() {
        const clientesData = await this.#connection.query("SELECT * FROM clientes;");
        return clientesData[0];
    }

    async selecionarCompras() {
        const comprasData = await this.#connection.query("SELECT * FROM compras;");
        return comprasData[0];
    }


}


module.exports= Database;