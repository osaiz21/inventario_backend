const router = require('express').Router()
const { 
  getLsTipoIdentificacionCtr, 
  getLsTipoCompraCtr,
  getLsTipoActivoCtr,
  getLsPisosCtr,
  getLsModelosCtr,
  getLsPaisCtr,
  getLsEstadoCtr,
  getLsActivoCtr,
  getLsCiudadCtr,
  getLsColoresCtr,
  getLsDisponibilidadCtr,
  getLsMarcasCtr,
  getLsMaterialesCtr,
  getLsTipoMantenimientoCtr,
  getUbicacionInventarioCtr,
  createUbicacionInventarioCtr,
  createEmpleadosEmpresaCtr,
  createInventarioCtr,
  UpdateInventarioCtr
} = require('../controllers')

// inventarme redireccione a las db
// gets Listas
router.get('/getlsTipoMantenimiento',getLsTipoMantenimientoCtr )
router.get('/getlsTipoIdentificacion',getLsTipoIdentificacionCtr )
router.get('/getlsTipoCompra',getLsTipoCompraCtr )
router.get('/getlsTipoActivo',getLsTipoActivoCtr )
router.get('/getlsPisos',getLsPisosCtr )
router.get('/getlsModelos',getLsModelosCtr )
router.get('/getlsPais',getLsPaisCtr )
router.get('/getlsEstado',getLsEstadoCtr)
router.get('/getlsActivo',getLsActivoCtr)
router.get('/getlsCiudad',getLsCiudadCtr)
router.get('/getlsColores',getLsColoresCtr)
router.get('/getlsDisponibilidad',getLsDisponibilidadCtr)
router.get('/getlsMarcas',getLsMarcasCtr)
router.get('/getlsMateriales',getLsMaterialesCtr)
router.get('/getUbicacionInventario',getUbicacionInventarioCtr)

// Post

router.post('/createUbicacionInventario',createUbicacionInventarioCtr)
router.post('/createEmpleadoEmpresa', createEmpleadosEmpresaCtr )
router.post('/createInventario', createInventarioCtr )
router.post('/updInventario/:id', UpdateInventarioCtr )

module.exports = router
