const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsTipoCompra = sequelize.define('lista_tipo_compra', {
    tipo_identificacion: {
        type: Sequelize.TEXT,
        field:'tipo_compra'
    }
  }
);

module.exports = { 
    df_lsTipoCompra
}