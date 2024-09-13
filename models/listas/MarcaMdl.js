const {  df_lsMarcas } = require('../define')

const getMarcaMdl = async () => {
   try {
       const results = await df_lsMarcas.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

const createMarcaMdl = async (body = {}) => {
    try {
        const results = await df_lsMarcas.create({
            ...body
        })
        return results
    }catch (error) {
         throw new Error (error.message)
    }
 }

module.exports = {
    getMarcaMdl,
    createMarcaMdl
}