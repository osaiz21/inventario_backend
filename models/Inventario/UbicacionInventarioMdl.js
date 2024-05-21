const { df_UbicacionInventario } = require("../define")

const getUbicacionInventarioMdl = async () => {
    try {
       const results = await df_UbicacionInventario.findAll()
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
       return body
    } catch (error) {
        throw new Error (error.message)
    }
}

module.exports = {
    getUbicacionInventarioMdl,
    createUbicacionInventarioMdl
}