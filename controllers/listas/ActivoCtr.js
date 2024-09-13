const { getActivoMdl, createLsActivoMdl } = require("../../models")

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

const createLsActivoCtr = async (req, res) => {
    try {
         const results = await createLsActivoMdl(req.body)
         res.send(results)
     } catch (error) {
         res.status(500).send({
             "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
         })
    }
 }

module.exports = {
    getLsActivoCtr,
    createLsActivoCtr
}