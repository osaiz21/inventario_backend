const { getMaterialesMdl } = require("../../models")

const getLsMaterialesCtr = async (req, res) => {
   try {
        const results = await getMaterialesMdl()
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsMaterialesCtr
}