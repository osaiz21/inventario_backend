const { df_EmpleadosEmpresa } = require("../define")

const createEmpleadosEmpresaMdl = async ({body}) => {
    try {
        const results = await df_EmpleadosEmpresa.create({
            ...body
        })
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}

const listEmpleadosEmpresaMdl = async (attributes = {}) => {
    try {
      const results = await df_EmpleadosEmpresa.findAll(
        attributes
      )
      return results
    } catch (error) {
        throw new Error (error.message)
    }
}

module.exports = {
    createEmpleadosEmpresaMdl,
    listEmpleadosEmpresaMdl
}