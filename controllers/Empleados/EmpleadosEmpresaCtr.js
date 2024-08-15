const { createEmpleadosEmpresaMdl, listEmpleadosEmpresaMdl } = require("../../models")


const createEmpleadosEmpresaCtr = async ( req, res ) => {
    try {
        const results = await createEmpleadosEmpresaMdl(req)
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}
const listsEmpleadosCtr = async (req, res) => {
    try {
        let params = {
            attributes: [
                "id",
                "tipo_identificacion_1",
                "num_identificacion_1",
                "nombres_1",
                "apellidos_1",
                "cargo_1",
                "cecos_1"
            ],
        }
        const results = await listEmpleadosEmpresaMdl(params)
        res.send(results)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}

module.exports = {
    createEmpleadosEmpresaCtr,
    listsEmpleadosCtr
}