const { df_lsManteniento } = require ('../define/Mantenimiento')

const getLsMantenimientoMdl = async () => {
   try {
       const results = await df_lsManteniento.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getLsMantenimientoMdl
}