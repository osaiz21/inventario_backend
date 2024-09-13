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
  UpdateInventarioCtr,
  uploadFileCtr,
  listsEmpleadosCtr,
  loginAuditorCtr,
  verifyToken,
  createMaterialesCtr,
  createLsActivoCtr,
  createLsColoresCtr,
  createLsMarcasCtr,
  createLsModelosCtr,
  createLsEstadoCtr,
  createLsDisponibilidadCtr
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
router.get('/getUsersCecos', listsEmpleadosCtr)

// Post

router.post('/createUbicacionInventario',createUbicacionInventarioCtr)
router.post('/createEmpleadoEmpresa', createEmpleadosEmpresaCtr )
router.post('/createInventario', createInventarioCtr )
router.post('/updInventario/:id', UpdateInventarioCtr )
router.post('/loginAuditor', loginAuditorCtr )

// create listas.
router.post('/createMateriales', createMaterialesCtr )
router.post('/createlsActivo',createLsActivoCtr)
router.post('/createlsColores',createLsColoresCtr)
router.post('/createlsMarcas',createLsMarcasCtr)
router.post('/createlsModelos',createLsModelosCtr )
router.post('/createlsEstado',createLsEstadoCtr)
router.post('/createlsDisponibilidad',createLsDisponibilidadCtr)
// middleware Token. (Falta)
router.post('/validateToken',  async (req, res) => {
  try {
    const { token_joro = '' } = req.headers
    const validateToken = await verifyToken(token_joro)
    res.send(validateToken)
  } catch (error) {
    res.status(401).send(error)
  }
})
// Files
router.post('/uploadFiles',uploadFileCtr)

module.exports = router
