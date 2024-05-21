const router = require('express').Router()
const { 
  getLsMantenimiento, 
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
  getLsMaterialesCtr
} = require('../controllers')


// gets Listas
router.get('/getlsMantenimiento',getLsMantenimiento )
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
module.exports = router
