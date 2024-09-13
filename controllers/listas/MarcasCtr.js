const { getMarcaMdl, createMarcaMdl } = require("../../models")

const getLsMarcasCtr = async (req, res) => {
   try {
        const results = await getMarcaMdl()
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
}
const createLsMarcasCtr = async (req, res) => {
    try {
         const results = await createMarcaMdl(req.body)
         res.send(results)
     } catch (error) {
         res.status(500).send({
             "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
         })
    }
}

module.exports = {
    getLsMarcasCtr,
    createLsMarcasCtr
}