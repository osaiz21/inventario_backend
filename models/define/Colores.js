const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsColores = sequelize.define('lista_colores', {
    text: {
        type: Sequelize.TEXT,
        field:'color'
    }
  }
);

module.exports = { 
    df_lsColores
}