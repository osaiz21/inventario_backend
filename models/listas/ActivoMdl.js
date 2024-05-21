const { df_lsactivo } = require('../define')

const getActivoMdl = async () => {
   try {
       const results = await df_lsactivo.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getActivoMdl
}