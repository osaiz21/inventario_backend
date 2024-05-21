const { df_lsTipoManteniento } = require("../define")


const getLsTipoMantenimientoMdl = async () => {
   try {
       const results = await df_lsTipoManteniento.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsTipoMantenimientoMdl
}