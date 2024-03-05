const { df_lsPisos } = require ('../define')

const getPisosMdl = async () => {
   try {
       const results = await df_lsPisos.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getPisosMdl
}