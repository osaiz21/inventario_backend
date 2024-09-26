const { isLoginMdl } = require("../../models/Auditor/AuditorMdl")
const { signGeneral } = require("../Jwt/JwtConfig")

const loginAuditorCtr = async (req, res) => {
  try {
    
    const { dataValues } = await isLoginMdl({
      attributes: [
        'id',
        'nombres',
        'apellidos',
        'email',
        'foto'
      ],
      where : {
        username: req.body.username || 'sin_definir',
        password: req.body.password || 'sin_definir',
      }
    })
    const token = await signGeneral(dataValues)
    res.send( { ...token , id : dataValues.id} )
  } catch (error) {
    res.status(500).send({
        "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
    })
  }
}

const loginPerfil = async (req, res) => {
  try {
    
    const { dataValues } = await isLoginMdl({
      attributes: [
        'id',
        'nombres',
        'apellidos',
        'email',
        'foto',
        'rol'
      ],
      where : {
        id: req.body.id
      }
    })
    res.send( dataValues )
  } catch (error) {
    res.status(500).send({
        "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
    })
  }
}
module.exports = {
  loginAuditorCtr,
  loginPerfil
}