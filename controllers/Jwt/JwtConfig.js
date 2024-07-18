let jwt = require('jsonwebtoken')

const signGeneral = async (data = {}) => {
    let token = await jwt.sign(
        data, 
        process.env.SIGN_JWT, 
        { 
            expiresIn: 60 * 60 
        }
    )
    return { token }
}
const verifyToken = async (token = '') => {
    const verify = await jwt.verify(token, process.env.SIGN_JWT)
    return verify
}

module.exports = {
    signGeneral,
    verifyToken
}