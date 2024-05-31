const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsactivo = sequelize.define('lista_activos', {
    text: {
        type: Sequelize.TEXT,
        field:'activo'
    }
  }
);

module.exports = { 
    df_lsactivo
}