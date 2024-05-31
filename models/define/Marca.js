const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsMarcas = sequelize.define('lista_marcas', {
    text: {
        type: Sequelize.TEXT,
        field:'marcas'
    }
  }
);

module.exports = { 
    df_lsMarcas
}