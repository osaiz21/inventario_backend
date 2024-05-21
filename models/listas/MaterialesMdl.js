const { df_lsMateriales } = require('../define')

const getMaterialesMdl = async () => {
   try {
       const results = await df_lsMateriales.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getMaterialesMdl
}