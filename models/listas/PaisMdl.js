const {  df_lsPais } = require ('../define')
const getPaisMdl = async () => {
   try {
       const results = await df_lsPais.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getPaisMdl
}