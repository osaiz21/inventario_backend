const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsTipoEstado = sequelize.define('lista_estado', {
    text: {
        type: Sequelize.TEXT,
        field:'estado'
    }
  }
);

module.exports = { 
    df_lsTipoEstado
}