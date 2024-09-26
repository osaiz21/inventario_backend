const { createInventarioMdl, updateInventarioMdl, ListInventarioMdl, delInventarioMdl, getInventarioMdl } = require("../../models")

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

const ListInventarioCtrUser = async (req, res) => {
    try {
        
        const result = await ListInventarioMdl(req.query)
        res.send(result)
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}

const delInventarioCtr = async (req, res) => {
    try {
        await delInventarioMdl({
            where: {
                id: req.params.id
            }
        }) 
        res.send(
            {
                id: req.params.id
            }
        )
    } catch (error) {

    }
}


const getInventarioCtr = async (req, res) => {
    try {
        const response = await getInventarioMdl({
            where: {
                ...req.query
            }
        }) 
        res.send(
            response
        )
    } catch (error) {
        res.status(500).send(
            {
                mns: error
            }
        )
    }
}
module.exports = {
    createInventarioCtr,
    UpdateInventarioCtr,
    ListInventarioCtrUser,
    delInventarioCtr,
    getInventarioCtr
}