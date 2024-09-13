const { df_lsColores } = require("../define")

const getColoresMdl = async () => {
   try {
       const results = await df_lsColores.findAll()
       return results
   }catch (error) {
        throw new Error (error.message)
   }
}

const createColoresMdl = async (body = {}) => {
    try {
        const results = await df_lsColores.create({
            ...body
        })
        return results
    }catch (error) {
         throw new Error (error.message)
    }
 }

module.exports = {
    getColoresMdl,
    createColoresMdl
}