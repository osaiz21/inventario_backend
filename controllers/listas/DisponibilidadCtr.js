const { getDisponibilidadMdl } = require("../../models")

const getLsDisponibilidadCtr = async (req, res) => {
   try {
        const results = await getDisponibilidadMdl()
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsDisponibilidadCtr
}