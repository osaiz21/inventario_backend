const router = require('express').Router()
const { 
  getLsMantenimiento, 
  getLsTipoIdentificacionCtr, 
  getLsTipoCompraCtr,
  getLsTipoActivoCtr,
  getLsPisosCtr,
  getLsModelosCtr,
  getLsPaisCtr
} = require('../controllers')


// gets Listas
router.get('/getlsMantenimiento',getLsMantenimiento )
router.get('/getlsTipoIdentificacion',getLsTipoIdentificacionCtr ),
router.get('/getlsTipoCompra',getLsTipoCompraCtr )
router.get('/getlsTipoActivo',getLsTipoActivoCtr )
router.get('/getlsPisos',getLsPisosCtr )
router.get('/getlsModelos',getLsModelosCtr )
router.get('/getlsPais',getLsPaisCtr )
module.exports = router
