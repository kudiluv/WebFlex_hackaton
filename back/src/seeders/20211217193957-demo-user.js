'use strict';
const argon2 = require('argon2');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Users', [{
      name: 'admin',
      email: 'admin@email.com',
      password: await argon2.hash('admin'),
      active: true,
      role: 'admin'
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
