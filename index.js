const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()
const router = require('./routes')
// route images.
app.use('/uploads',express.static('uploads'))
// middleware.
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(cors())
app.use(bodyParser.json())

// v1 Routes

app.use('/v1',router)

app.listen(process.env.PORT || 6000, () => {
    console.log('the services Actived to port ' + process.env.PORT)
})