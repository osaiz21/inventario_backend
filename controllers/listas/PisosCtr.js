const { getPisosMdl } = require('../../models')
const getLsPisosCtr = async (req, res) => {
   try {
        const results = await getPisosMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsPisosCtr
}