const {  getPaisMdl } = require('../../models')
const getLsPaisCtr = async (req, res) => {
   try {
        const results = await getPaisMdl() 
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl Pais'
        })
   }
}

module.exports = {
    getLsPaisCtr
}