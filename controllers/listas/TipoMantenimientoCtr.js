const { getLsTipoMantenimientoMdl } = require("../../models")

const getLsTipoMantenimientoCtr = async (req, res) => {
   try {
        const results = await getLsTipoMantenimientoMdl()
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsTipoMantenimientoCtr
}