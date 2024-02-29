const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_lsManteniento = sequelize.define('lista_tipo_mantenimiento', {
    id_tipo_mantenimiento: {
        type: Sequelize.INTEGER,
        field:'id'
    },
    tipo_mantenimiento: {
        type: Sequelize.TEXT,
        field:'tipo_mantenimiento'
    }
  }
);

module.exports = { 
    df_lsManteniento
}