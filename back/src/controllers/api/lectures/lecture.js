const router = require("express").Router();
const models = global.sequelize.models;

router.get('/:id', async (req, res) => {
    try {
        const lecture = await models.Lecture.findByPk(req.params.id)
        console.log(lecture);
        if (!lecture) {
            res.sendStatus(404);
            return;
        }
        const documents = await models.Document.findAll({
            where: {
                lectureId: lecture.id
            },
            attributes: ['path', 'type', 'updatedAt']
        })
        res.json({
            lecture,
            documents,
        });
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
})

module.exports = router;