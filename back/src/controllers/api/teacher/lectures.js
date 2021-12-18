const router = require("express").Router();
const multer = require("multer");
const storage = require("../../../helpers/multerStorge");
const LectureService = require("../../../services/LectureService")
const models = global.sequelize.models;
const path = require("path")
const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, callback) {
    var ext = path.extname(file.originalname);
    if(ext !== '.mp4' && ext !== '.doc' && ext !== '.gocx') {
        return callback(new Error('Only (.mp4|.doc|.gocx) are allowed'))
    }
    callback(null, true)
  } 
});

router.get('/', async (req, res) => {
  const {page=1} = req.query;
  const limit = 15;
  result = await models.Lecture.findAll({
      limit,
      offset: (page - 1) * limit
  })
  res.json(result);
})

router.post('/', upload.array('files', 10), async (req, res) => {
  result = await LectureService.addLecture(req.body, req.files)
  res.json(result);
})

module.exports = router;