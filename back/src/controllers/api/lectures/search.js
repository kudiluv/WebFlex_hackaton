const router = require("express").Router();
const EsService = require("../../../services/EsService");
const models = global.sequelize.models;
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    const {keyword='', page=1} = req.query;
    const limit = 15
    const offset = (page - 1) * limit;

    const results = await EsService.search(keyword, offset, limit)
    const lectureId = results.body.hits.hits.map(item => item._source.lectureId)
    const count = results.body.hits.total.value
    const pages = Math.ceil(count / limit)
    let lectures = []
    if (lectureId.length != 0) {
        lectures = await models.Lecture.findAll({
            where: {
                id: {
                    [Op.or]: lectureId
                }
            }
        });
    }

    res.json({
        pages: pages,
        count: count,
        rows: lectures 
    }); 
})

module.exports = router;