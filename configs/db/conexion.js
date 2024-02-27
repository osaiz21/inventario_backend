const { sequelize , Sequelize  } = require('./config')
let instance = true
const conectar = async () => {
    try {
        if (instance) {
            sequelize.authenticate()
            instance = false
        }
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = {
    Sequelize,
    sequelize,
    conectar
}