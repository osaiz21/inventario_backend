const { createInventarioMdl, updateInventarioMdl } = require("../../models")

const createInventarioCtr = async (req, res) => {
    try {
        const result = await createInventarioMdl(req)
        res.send(result)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}

const UpdateInventarioCtr = async (req, res) => {
    try {
        const result = await updateInventarioMdl(
            req,
            {
                where: {
                  id: req.params.id,
                },
            }
        )
        res.send(result)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}

module.exports = {
    createInventarioCtr,
    UpdateInventarioCtr
}