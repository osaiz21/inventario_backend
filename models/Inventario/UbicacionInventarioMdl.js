const { df_UbicacionInventario } = require("../define")

const getUbicacionInventarioMdl = async ( where = {}) => {
    try {
       const results = await df_UbicacionInventario.findOne(where)
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}

const createUbicacionInventarioMdl = async ({body}) => {
    try {
        if(!body.codigo_plano) {
            throw new Error(`Codigo Plano es requerido`)
        }
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