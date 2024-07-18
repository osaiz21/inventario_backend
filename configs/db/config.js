const  Sequelize = require('sequelize') 
const path = require('path')


require('dotenv').config({path: path.resolve(__dirname,'../../.env')})
const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASS_DB, {
  host: process.env.HOST_DB,
  dialect: process.env.DIALECT,
  define: {   
    freezeTableName: true,
    paranoid: true
  }
})


module.exports = {
    Sequelize,
    sequelize
}