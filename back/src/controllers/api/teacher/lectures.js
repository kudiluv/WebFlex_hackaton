const router = require("express").Router();
const multer = require("multer");
const storage = require("../../../helpers/multerStorge");
const LectureService = require("../../../services/LectureService")
const models = global.sequelize.models;
const path = require("path")
const upload = require("../../../helpers/multerStorge").upload;

router.get('/', async (req, res) => {
  const {page=1} = req.query;
  const limit = 15;
  result = await models.Lecture.findAndCountAll({
      where: {
        userId: req.user.id
      },
      limit,
      offset: (page - 1) * limit
  })
  result.pages = Math.ceil(result.count / limit)
  res.json(result);
})

router.post('/', upload.array('files', 10), async (req, res) => {
  result = await LectureService.addLecture(req.body, req.files, req.user)
  res.json(result);
})

module.exports = router;