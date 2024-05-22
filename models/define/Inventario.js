const { sequelize , Sequelize } = require('../../configs/db/conexion')
// Modelo del tabla Productos.
const df_Inventario = sequelize.define('inventario', {
    id_auditor: {
        type: Sequelize.INTEGER,
        field:'id_auditor'
    },
    id_ubicacion: {
        type: Sequelize.INTEGER,
        field:'id_ubicacion'
    },
    id_empleado: {
        type: Sequelize.INTEGER,
        field: 'id_empleado'
    },
    placa_nueva: {
        type: Sequelize.TEXT,
        field: 'placa_nueva'
    },
    placa_antigua: {
        type: Sequelize.TEXT,
        field:'placa_antigua'
    },
    nombre_activo: {
        type: Sequelize.TEXT,
        field:'nombre_activo'
    },
    material: {
        type: Sequelize.TEXT,
        field:'material'
    },
    color: {
        type: Sequelize.INTEGER,
        field:'color'
    },
    especificacion: {
        type: Sequelize.TEXT,
        field: 'especificacion'
    },
    marca: {
        type: Sequelize.INTEGER,
        field: 'marca'
    },
    modelo: {
        type: Sequelize.INTEGER,
        field:'modelo'
    },
    serie: {
        type: Sequelize.TEXT,
        field:'serie'
    },
    cantidad: {
        type: Sequelize.INTEGER,
        field:'cantidad'
    },
    placapadre: {
        type: Sequelize.TEXT,
        field:'placapadre'
    },
    estado: {
        type: Sequelize.INTEGER,
        field:'estado'
    },
    disponibilidad: {
        type: Sequelize.INTEGER,
        field:'disponibilidad'
    },
    comentario: {
        type: Sequelize.TEXT,
        field:'comentario'
    },
    foto: {
        type: Sequelize.TEXT,
        field:'foto'
    },
    turnos_dia: {
        type: Sequelize.TEXT,
        field:'turnos_dia'
    },
    especificacion_tecnica: {
        type: Sequelize.TEXT,
        field:'especificacion_tecnica'
    },
    horas_uso: {
        type: Sequelize.TEXT,
        field:'horas_uso'
    },
    funcion_prestada: {
        type: Sequelize.TEXT,
        field:'funcion_prestada'
    },
    activo: {
        type: Sequelize.INTEGER,
        field:'activo'
    },
    anio_adquisicion: {
        type: Sequelize.INTEGER,
        field:'anio_adquisicion'
    },
    periodo_mantenimiento: {
        type: Sequelize.TEXT,
        field:'periodo_mantenimiento'
    },
    tipo_mantenimiento: {
        type: Sequelize.INTEGER,
        field:'tipo_mantenimiento'
    },
    material_procesado: {
        type: Sequelize.TEXT,
        field:'material_procesado'
    },
    capacidad_productiva: {
        type: Sequelize.TEXT,
        field:'capacidad_productiva'
    },
    tipo_compra: {
        type: Sequelize.INTEGER,
        field:'tipo_compra'
    },
    foto_2: {
        type: Sequelize.TEXT,
        field:'foto_2'
    },
    foto_3: {
        type: Sequelize.TEXT,
        field:'foto_3'
    }
  }
)

module.exports = { 
    df_Inventario
}