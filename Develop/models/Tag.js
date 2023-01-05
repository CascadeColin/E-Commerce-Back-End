const { Model, DataTypes } = require('sequelize');
const { databaseVersion } = require('../../../gitlab/UW-VIRT-FSF-PT-09-2022-U-LOLC/13-ORM/01-Activities/26-Stu_Literals/Solved/config/connection.js');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
