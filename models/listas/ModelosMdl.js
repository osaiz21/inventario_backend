const { df_lsModelos } = require("../define")

const getLsModelosMdl = async () => {
   try {
       const results = await df_lsModelos.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

const createLsModelosMdl = async ( body={}) => {
    try {
        const results = await df_lsModelos.create({
            ...body
        })
        return results
    }catch (error) {
         throw new Error (error.message)
    }
 }

module.exports = {
    getLsModelosMdl,
    createLsModelosMdl
}