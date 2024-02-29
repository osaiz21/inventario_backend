const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsTipoIdentificacion = sequelize.define('lista_tipo_identificacion', {
    tipo_identificacion: {
        type: Sequelize.TEXT,
        field:'tipo_identificacion'
    }
  }
);

module.exports = { 
    df_lsTipoIdentificacion
}