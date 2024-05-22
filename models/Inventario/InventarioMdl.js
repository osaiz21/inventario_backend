const {  df_Inventario } = require("../define")

const createInventarioMdl = async ({body}) => {
    try {
        const results = await df_Inventario.create({
            ...body
        })
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}
const updateInventarioMdl = async ({body}, where = {}) => {
    try {
        const results = await df_Inventario.update(
            body,
            where,
        )
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}

module.exports = {
    createInventarioMdl,
    updateInventarioMdl
}