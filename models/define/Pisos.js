const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsPisos = sequelize.define('lista_piso', {
    piso: {
        type: Sequelize.TEXT,
        field:'piso'
    }
  }
);

module.exports = { 
    df_lsPisos
}