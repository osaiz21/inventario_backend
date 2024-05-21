const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_EmpleadosEmpresa = sequelize.define('empleados_empresa', {
    tipo_identificacion_1: {
        type: Sequelize.INTEGER,
        field:'tipo_identificacion_1'
    },
    num_identificacion_1: {
        type: Sequelize.TEXT,
        field:'num_identificacion_1'
    },
    nombres_1: {
        type: Sequelize.TEXT,
        field: 'nombres_1'
    },
    apellidos_1: {
        type: Sequelize.TEXT,
        field: 'apellidos_1'
    },
    cargo_1: {
        type: Sequelize.TEXT,
        field:'cargo_1'
    },
    cecos_1: {
        type: Sequelize.TEXT,
        field:'cecos_1'
    },
    tipo_identificacion_2: {
        type: Sequelize.INTEGER,
        field:'tipo_identificacion_2'
    },
    num_identificacion_2: {
        type: Sequelize.TEXT,
        field:'num_identificacion_2'
    },
    nombres_2: {
        type: Sequelize.TEXT,
        field: 'nombres_2'
    },
    apellidos_2: {
        type: Sequelize.TEXT,
        field: 'apellidos_2'
    },
    cargo_2: {
        type: Sequelize.TEXT,
        field:'cargo_2'
    },
    cecos_2: {
        type: Sequelize.TEXT,
        field:'cecos_2'
    },
  }
)

module.exports = { 
    df_EmpleadosEmpresa
}