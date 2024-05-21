const { df_lsTipoActivo } = require("../define")


const getTipoActivoMdl = async () => {
   try {
       const results = await df_lsTipoActivo.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getTipoActivoMdl
}