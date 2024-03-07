const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsModelos = sequelize.define('lista_modelo', {
    activo: {
        type: Sequelize.TEXT,
        field:'activo'
    },
    modelo: {
        type: Sequelize.TEXT,
        field:'modelo'
    },
  }
);

module.exports = { 
    df_lsModelos
}