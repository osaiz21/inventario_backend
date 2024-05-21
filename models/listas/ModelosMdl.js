const { df_lsModelos } = require("../define")

const getLsModelosMdl = async () => {
   try {
       const results = await df_lsModelos.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsModelosMdl
}