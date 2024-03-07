const { df_lsModelos } = require("../define")

const getLsMantenimientoMdl = async () => {
   try {
       const results = await df_lsModelos.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsMantenimientoMdl
}