const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsTipoMarcas = sequelize.define('lista_marcas', {
    marcas: {
        type: Sequelize.TEXT,
        field:'marcas'
    }
  }
);

module.exports = { 
    df_lsTipoMarcas
}