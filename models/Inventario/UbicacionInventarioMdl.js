const { df_UbicacionInventario } = require("../define")

const getUbicacionInventarioMdl = async ( where = {}) => {
    try {
       const results = await df_UbicacionInventario.findAll(where)
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}

const createUbicacionInventarioMdl = async ({body}) => {
    try {

        const results = await df_UbicacionInventario.create({
            ...body
        })
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}

module.exports = {
    getUbicacionInventarioMdl,
    createUbicacionInventarioMdl
}