const {  df_auditor } = require("../define")

// const createEmpleadosEmpresaMdl = async ({body}) => {
//     try {
//         const results = await df_EmpleadosEmpresa.create({
//             ...body
//         })
//        return results
//     } catch (error) {
//         throw new Error (error.message)
//     }
// }

const isLoginMdl = async (attr = {}) => {
    try {
      const results = await df_auditor.findOne(attr)
      if (!results) {
        throw new Error('Inconcistencia en los Datos')
      }
      return results
    } catch (error) {
        throw new Error (error.message)
    }
}

module.exports = {
    isLoginMdl
}