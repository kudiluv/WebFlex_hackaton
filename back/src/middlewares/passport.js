const { Strategy, ExtractJwt } = require("passport-jwt");
const config = require('../config');
const models = global.sequelize.models;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.salt
}

module.exports = (passport) => {
    passport.use(
        new Strategy(options, async(payload, done) => {
            try {
                const user = await models.User.findByPk(payload.data.id);
                if (user) {
                    done(null, user);
                } else {
                    done(null, false);
                }
            } catch (error) {
                console.log(error);
            }
        })
    )
}