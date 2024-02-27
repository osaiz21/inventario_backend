const { getCausalesMdl } = require('../../models')
const getCausales = async (req, res) => {
   try {
        const results = await getCausalesMdl() 
        res.send({
            'data': results
        })
   }catch (error) {
        res.status(401).send({
            "mns": error.message
        })
   }
   
}

module.exports = {
    getCausales
}