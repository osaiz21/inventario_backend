const { causal } = require ('../define/causal')

const getCausalesMdl = async () => {
   try {
       // const results = await causal.findAll()
       //return results
   }catch (error) {
        throw new Error (error.message)
   }
}

module.exports = {
    getCausalesMdl
}