const path = require('path')
const ComprasDAO = require('../../DAO/comprasDAO')
const app = require('../../startup')


module.exports = (app) => {
    app.get("/compras", async (req, res) => {
        
        const comprasdao = new ComprasDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await comprasdao.consultarCompras())

    })
}