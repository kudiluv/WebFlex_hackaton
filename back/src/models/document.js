const DataTypes = require("sequelize").DataTypes;

module.exports = (sequelize) => {
    const Lecture = sequelize.define('Document', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lectureId: {
          type: DataTypes.INTEGER,
          references: {
            model: 'Lectures',
            key: 'id',
          },
        },
        path: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        ocr: {
          type: DataTypes.BOOLEAN,
          default: false,
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