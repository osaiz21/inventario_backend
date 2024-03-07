const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsPais = sequelize.define('lista_pais', {
    piso: {
        type: Sequelize.TEXT,
        field:'pais'
    }
  }
);

module.exports = { 
    df_lsPais
}