const router = require('express').Router()
const { 
        getCausales
    } = require('../controllers')


//gets
router.get('/getCausales',getCausales )
module.exports = router
