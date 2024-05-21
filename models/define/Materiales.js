const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsMateriales = sequelize.define('lista_materiales', {
    marcas: {
        type: Sequelize.TEXT,
        field:'material'
    }
  }
);

module.exports = { 
    df_lsMateriales
}