const { getLsMantenimientoMdl } = require("../../models/listas/ModelosMdl")

const getLsModelosCtr = async (req, res) => {
   try {
        const results = await  getLsMantenimientoMdl()
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsModelosCtr
}