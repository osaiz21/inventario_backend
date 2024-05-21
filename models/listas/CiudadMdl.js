const { df_lsCiudad } = require("../define/")

const getCiudadMdl = async () => {
   try {
       const results = await df_lsCiudad.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getCiudadMdl
}