const { getLsTipoCompraMdl } = require('../../models')
const getLsTipoCompraCtr = async (req, res) => {
   try {
        const results = await getLsTipoCompraMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsTipoCompraCtr
}