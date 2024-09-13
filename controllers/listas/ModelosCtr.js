const { getLsModelosMdl, createLsModelosMdl } = require("../../models")


const getLsModelosCtr = async (req, res) => {
   try {
        const results = await  getLsModelosMdl()
        res.send(results)
   }catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
   }
   
}

const createLsModelosCtr = async (req, res) => {
    try {
         const results = await  createLsModelosMdl( req.body )
         res.send(results)
    }catch (error) {
         res.status(500).send({
             "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
         })
    }
    
 }

module.exports = {
    getLsModelosCtr,
    createLsModelosCtr
}