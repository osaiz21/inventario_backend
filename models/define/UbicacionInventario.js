const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_UbicacionInventario = sequelize.define('ubicacion_inventario', {
    codigo_plano: {
        type: Sequelize.TEXT,
        field:'codigo_plano'
    },
    pais: {
        type: Sequelize.TEXT,
        field:'pais'
    },
    ciudad: {
        type: Sequelize.TEXT,
        field:'ciudad'
    },
    sede: {
        type: Sequelize.TEXT,
        field:'sede'
    },
    departamento: {
        type: Sequelize.TEXT,
        field:'departamento'
    },
    ubicacion_fisica: {
        type: Sequelize.TEXT,
        field:'ubicacion_fisica'
    },
    piso: {
        type: Sequelize.TEXT,
        field:'piso'
    }
  }
)

module.exports = { 
    df_UbicacionInventario
}