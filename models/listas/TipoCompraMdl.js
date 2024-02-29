const { df_lsTipoCompra } = require ('../define/TipoCompra')

const getLsTipoCompraMdl = async () => {
   try {
       const results = await df_lsTipoCompra.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsTipoCompraMdl
}