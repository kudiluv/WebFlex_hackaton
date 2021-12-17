const env = process.env;


const db = {
    host: env.DB_HOST,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_DATABASE,
    dialect: "mysql",
}

module.exports = {
    db,
    salt: env.SALT,
    app: {
        port: env.APP_PORT || 5000
    },
}
