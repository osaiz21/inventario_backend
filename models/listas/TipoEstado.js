const {  df_lsTipoEstado } = require ('../define')
const getEstadoMdl = async () => {
   try {
       const results = await df_lsTipoEstado.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

const createEstadoMdl = async (body = {}) => {
    try {
        const results = await df_lsTipoEstado.create({
            ...body
        })
        return results
    }catch (error) {
         throw new Error (error.message)
    }
 }

module.exports = {
    getEstadoMdl,
    createEstadoMdl
}