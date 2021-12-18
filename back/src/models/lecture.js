const DataTypes = require("sequelize").DataTypes;

module.exports = (sequelize) => {
    const Lecture = sequelize.define('Lecture', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE
        }
    });
    return Lecture;
}