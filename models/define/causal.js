const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const causal = sequelize.define('causal', {
    name: {
        type: Sequelize.TEXT,
        field:'name'
    }
  }
);

module.exports = { 
    causal
}