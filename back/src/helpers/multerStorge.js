const multer = require("multer");
const path = require("path")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/app/uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    const format = '.' + file.originalname.split('.').pop()
    cb(null, file.fieldname + '-' + uniqueSuffix + format)
  }
})

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if(ext !== '.mp4' && ext !== '.doc' && ext !== '.docx') {
      return callback(new Error('Only (.mp4|.doc|.docx) are allowed'))
    }
    callback(null, true)
  } 
});

module.exports = {
    storage,
    upload
}