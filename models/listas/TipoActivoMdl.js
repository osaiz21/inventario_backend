const { df_lsManteniento } = require ('../define/TipoActivo')

const getTipoActivoMdl = async () => {
   try {
       const results = await df_lsManteniento.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getTipoActivoMdl
}