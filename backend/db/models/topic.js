'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    title: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    body:{
      type: DataTypes.STRING(512),
      allowNull: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(12),
      allowNull: false,
    },
  }, {});
  Topic.associate = function(models) {
    Topic.belongsTo(models.User, { foreignKey: 'ownerId' });
    Topic.hasMany(models.Answer, { foreignKey : 'topicId' });
  };
  return Topic;
};
