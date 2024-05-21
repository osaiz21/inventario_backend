const {  getTipoActivoMdl } = require('../../models')
const getLsTipoActivoCtr = async (req, res) => {
   try {
        const results = await getTipoActivoMdl()
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsTipoActivoCtr
}