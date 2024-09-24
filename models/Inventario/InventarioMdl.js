const { QueryTypes } = require("sequelize")
const { sequelize } = require("../../configs/db/config")
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


const ListInventarioMdl = async ( {id_auditor = 0}) => {
    try {
        const results = await sequelize.query(`SELECT
            i.id, 
            i.placa_nueva,
            b.codigo_plano,
            b.sede,
            b.departamento,
            b.ubicacion_fisica,
            b.piso,
            i.placa_antigua,
            i.nombre_activo,
            i.serie,
            i.createdAt,
            i.fotos,
            i.cantidad,
            lm.marcas,
            lmd.modelo
        from 
            inventario i left join ubicacion_inventario b on b.id = i.id_ubicacion
                left join lista_marcas lm on i.id_marca = lm.id
                left join lista_modelo lmd on i.id_modelo = lmd.id
        where 
            i.id_auditor  = ?`, {
            replacements: [id_auditor],
            type: QueryTypes.SELECT,
        });
       return results
    } catch (error) {
        throw new Error (error.message)
    }
}
module.exports = {
    createInventarioMdl,
    updateInventarioMdl,
    ListInventarioMdl
}