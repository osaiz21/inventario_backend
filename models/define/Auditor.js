const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_auditor = sequelize.define('auditor', {
    tipo_identificacion: {
        type: Sequelize.INTEGER,
        field:'tipo_identificacion'
    },
    num_identificacion: {
        type: Sequelize.TEXT,
        field:'num_identificacion'
    },
    nombres: {
        type: Sequelize.TEXT,
        field: 'nombres'
    },
    apellidos: {
        type: Sequelize.TEXT,
        field: 'apellidos'
    },
    rol: {
        type: Sequelize.TEXT,
        field:'rol'
    },
    email: {
        type: Sequelize.TEXT,
        field:'email'
    },
    password: {
        type: Sequelize.TEXT,
        field:'password'
    },
    foto: {
        type: Sequelize.TEXT,
        field:'foto'
    },
    email: {
        type: Sequelize.TEXT,
        field:'email'
    },
    estado: {
        type: Sequelize.TEXT,
        field:'estado'
    }

  }
)

module.exports = { 
    df_auditor
}