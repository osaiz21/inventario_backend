const router = require('express').Router()
const { 
  getLsMantenimiento, getLsTipoIdentificacionCtr, getLsTipoCompraCtr
} = require('../controllers')


// gets Listas
router.get('/getlsMantenimiento',getLsMantenimiento )
router.get('/getlsTipoIdentificacion',getLsTipoIdentificacionCtr ),
router.get('/getlsTipoCompra',getLsTipoCompraCtr )
module.exports = router
