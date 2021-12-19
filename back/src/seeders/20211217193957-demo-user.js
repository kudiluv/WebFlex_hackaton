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
    },
    {
      name: 'michal',
      email: 'michail@email.com',
      password: await argon2.hash('admin'),
      active: true,
      role: 'teacher'
    },{
      name: 'igor',
      email: 'igor@email.com',
      password: await argon2.hash('admin'),
      active: true,
      role: 'student'
    }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
