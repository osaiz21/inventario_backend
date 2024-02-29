const { getLsTipoIdentificacionMdl } = require('../../models')
const getLsTipoIdentificacionCtr = async (req, res) => {
   try {
        const results = await getLsTipoIdentificacionMdl() 
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
}

module.exports = {
    getLsTipoIdentificacionCtr
}