'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    ownerId: DataTypes.INTEGER,
    slug: DataTypes.STRING
  }, {});
  Topic.associate = function(models) {
    // associations can be defined here
  };
  return Topic;
};