const argon2 = require('argon2');
const models = global.sequelize.models;
const config = require('../config')
const jwt = require('jsonwebtoken')
const { ExtractJwt } = require("passport-jwt");

class AuthService {

    static async signUp(email, password) {

        if (!email && !password) {
            throw Error('Invalid data')
        }

        const userRecord = await models.User.findOne({
            where: {
                email
            }
        });
        if (userRecord) {
            throw Error('User already exist');
        }
        const hashedPassword = await argon2.hash(password);

        const newUserRecord = await models.User.create({
            email,
            password: hashedPassword
        });
        return {
            accessToken: this.generateJWT(newUserRecord),
            refreshToken: await this.generateRefreshToken(newUserRecord)
        }
    }

    static async login(email, password) {

        const userRecord = await models.User.findOne({
            where: {
                email
            }
        });
        if (!userRecord) {
            throw new Error('User not Found');
        }

        const correctPassword = await argon2.verify(userRecord.password, password);
        if (!correctPassword) {
            throw new Error('Incorrect password')
        }

        return {
            accessToken: this.generateJWT(userRecord),
            refreshToken: await this.generateRefreshToken(userRecord)
        }

    }

    static async updateToken(tokenFromRequest) {
        const token = tokenFromRequest.split(' ')[1];
        const data = jwt.verify(token, config.salt).data;
        console.log(data.uuidToken);
        const uuid = await models.RefreshToken.findByPk(data.uuidToken);
        if (!uuid){
            throw new Error('Token is not valid');
        }
        await models.RefreshToken.destroy({
            where: {
                id: uuid.id
            }
        });
        const user = await models.User.findByPk(data.id);
        return this.generateJWT(user);
    }

    static generateJWT(user) {
        const data = {
            id: user.id,
            email: user.email
        }
        const expiration = '6h';

        return `Bearer ${jwt.sign({data}, config.salt, {expiresIn: expiration})}`;
    }

    static async generateRefreshToken(user) {
        const token = await models.RefreshToken.create();
        const data = {
            id: user.id,
            uuidToken: token.id
        }
        const expiration = `30d`;

        return `Bearer ${jwt.sign({data}, config.salt, {expiresIn: expiration})}`
    }
}

module.exports = AuthService