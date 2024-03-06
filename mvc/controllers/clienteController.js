const path = require('path')
const ClienteDAO = require('../../DAO/clienteDAO')
const app = require('../../startup')


module.exports = (app) => {
    app.get("/clientes", async (req, res) => {
        
        const clientedao = new ClienteDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await clientedao.consultarCliente())

    })
}