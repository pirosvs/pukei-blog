const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // needs to take user id
    // needs to take in post id
    // body/ text of the comment
    // date posted
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    post_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'blogPost',
        key: 'id',
    },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
  }
);

module.exports = BlogPost;
