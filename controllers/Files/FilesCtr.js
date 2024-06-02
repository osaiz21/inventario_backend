const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({storage: storage}).any('uploadedImages');
const uploadFileCtr = (req, res) => {
    try {
      upload(req, res, function(err){
        if(err){
          console.log(err);
          return;
        }
        res.send(req.files)
      })
    } catch (error) {
        res.status(500).send({
            "mns": error.message || error.stack || 'error En encontrar Mdl ls Mantenimiento'
        })
    }
}



module.exports = {
  uploadFileCtr
}