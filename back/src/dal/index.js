const Sequelize = require('sequelize');
const config = require('../config');
const utils = require('../utils');


const sequelize = new Sequelize(config.db);

const modelsPath = utils.readdirRecursiveSync(`${__dirname}/../models`);

modelsPath.forEach((path) => {
    require(path)(sequelize);
})

module.exports = function useDatabase() {
    global.sequelize = sequelize;
};