const {  df_lsTipoEstado } = require ('../define')
const getEstadoMdl = async () => {
   try {
       const results = await df_lsTipoEstado.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getEstadoMdl
}