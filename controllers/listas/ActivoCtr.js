const { getActivoMdl } = require("../../models")

const getLsActivoCtr = async (req, res) => {
   try {
        const results = await getActivoMdl()
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

module.exports = {
    getLsActivoCtr
}