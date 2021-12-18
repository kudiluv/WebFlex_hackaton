const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/app/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const format = '.' + file.mimetype.split('/')[1]
    cb(null, file.fieldname + '-' + uniqueSuffix + format)
  }
})

module.exports = storage;