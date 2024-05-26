const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsCiudad = sequelize.define('lista_ciudad', {
    text: {
        type: Sequelize.TEXT,
        field:'ciudad'
    }
  }
);

module.exports = { 
    df_lsCiudad
}