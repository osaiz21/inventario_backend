const { getEstadoMdl, createEstadoMdl } = require('../../models')
const getLsEstadoCtr = async (req, res) => {
   try {
        const results = await getEstadoMdl()
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

const createLsEstadoCtr = async (req, res) => {
    try {
        const results = await createEstadoMdl( req.body )
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
    }
 }
module.exports = {
    getLsEstadoCtr,
    createLsEstadoCtr
}