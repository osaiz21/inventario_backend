const { df_lsTipoIdentificacion } = require ('../define/TipoIdentificacion')

const getLsTipoIdentificacionMdl = async () => {
   try {
       const results = await df_lsTipoIdentificacion.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsTipoIdentificacionMdl
}