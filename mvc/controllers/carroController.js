const path = require('path')
const CarroDAO = require('../../DAO/carroDAO1')
const app = require('../../startup')


module.exports = (app) => {
    app.get("/carros", async (req, res) => {
        
        const carroDAO = new CarroDAO();
        res.setHeader("Access-Control-Allow-Origin","*")

        res.status(201).json(await carroDAO.consultarCarro())

    })
}