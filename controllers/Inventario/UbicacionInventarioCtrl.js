const {  getUbicacionInventarioMdl, createUbicacionInventarioMdl } = require("../../models");

const getUbicacionInventarioCtr = async (req, res) => {
    try {
        const result = await getUbicacionInventarioMdl()
        res.send(result)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}

const createUbicacionInventarioCtr = async (req, res) => {
    try {
        const result = await createUbicacionInventarioMdl(req)
        res.send(result)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}

module.exports = {
    getUbicacionInventarioCtr,
    createUbicacionInventarioCtr
}