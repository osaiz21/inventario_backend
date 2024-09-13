const { getColoresMdl, createColoresMdl } = require("../../models")


const getLsColoresCtr = async (req, res) => {
   try {
        const results = await getColoresMdl()
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

const createLsColoresCtr = async (req, res) => {
    try {
         const results = await createColoresMdl(req.body)
         res.send(results)
     } catch (error) {
         res.status(500).send({
             "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
         })
    }
    
}

module.exports = {
    getLsColoresCtr,
    createLsColoresCtr
}