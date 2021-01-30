'use strict';

const topic = require("./topic");

module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    topicId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    header: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(512),
      allowNull: true,
    },
  }, {});
  Answer.associate = function(models) {
    const ipAssociation = {
      through: 'Vote',
      foreignKey: 'answerId',
      otherKey: 'ipId'
    }
    Answer.belongsTo(models.Topic, { foreignKey: 'topicId' });
    Answer.belongsToMany(models.IP, ipAssociation);
    Answer.hasMany(models.Vote, { foreignKey: 'answerId'} )
  };
  return Answer;
};
