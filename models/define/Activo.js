const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsactivo = sequelize.define('lista_activos', {
    activo: {
        type: Sequelize.TEXT,
        field:'activo'
    }
  }
);

module.exports = { 
    df_lsactivo
}