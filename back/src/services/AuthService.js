const argon2 = require('argon2');
const models = global.sequelize.models;
const config = require('../config')
const jwt = require('jsonwebtoken')
const roles = require('../consts/roles')

class AuthService {

    static async addUser(name, role) {
        if (!name) {
            throw new Error('invalid name')
        }

        if (!roles[role.toUpperCase()]) {
            throw new Error('Invalid role')
        }

        const newUserRecord = await models.User.create({
            name,
            role
        });
        const registerToken = await models.RegisterToken.create({
            userId: newUserRecord.id
        })
        return {
            registerToken,
            user: newUserRecord
        }
    }

    static async signUp(email, password, token) {
        
        if (!email && !password) {
            throw Error('Invalid data')
        }
        const registerToken = await models.RegisterToken.findOne({
            where: {
                id: token
            }
        })
        if(!registerToken) {
            throw Error('Token is not valid')
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

        const newUserRecord = await models.User.update({
            email,
            password: hashedPassword,
            active: true,
        }, {
            where: {
                id: registerToken.userId,
            }
        });
        
        await models.RegisterToken.destroy({
            where: {
                id: registerToken.id
            }
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
            email: user.email,
            role: user.role
        }
        const expiration = '6h';

        return `Bearer ${jwt.sign({data}, config.salt, {expiresIn: expiration})}`;
    }

    static async generateRefreshToken(user) {
        const token = await models.RefreshToken.create();
        const data = {
            id: user.id,
            uuidToken: token.id,
            role: user.role
        }
        const expiration = `30d`;

        return `Bearer ${jwt.sign({data}, config.salt, {expiresIn: expiration})}`
    }
}

module.exports = AuthService