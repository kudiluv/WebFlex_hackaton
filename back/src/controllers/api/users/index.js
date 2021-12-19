const router = require("express").Router();
const models = global.sequelize.models;

router.get('/', async (req,res) => {
    const {page=1} = req.query;
    const limit = 15;
    users = await models.User.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
        attributes: ["id", "name", "email", "role"]
    })
    const userRegister = await Promise.all( users.rows.map(async user => {
        const token = await models.RegisterToken.findOne({
            where: {
                userId: user.id
            },
            attributes: ["id"]
        })
        return {
            user,
            token,
        }
    })
    )
    res.json({
        pages: Math.ceil(users.count / limit),
        rows: userRegister,
        count: users.count
    });
});

router.delete('/:id', async (req, res) => {
    await models.User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.sendStatus(204);
})

module.exports = router