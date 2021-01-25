'use strict';
module.exports = (sequelize, DataTypes) => {
  const IP = sequelize.define('IP', {
    ipAddress: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
  }, {});
  IP.associate = function(models) {
    const answerAssociation = {
      through: 'Vote',
      foreignKey: 'ipId',
      otherKey: 'answerId'
    }
    IP.belongsToMany(models.Answer, answerAssociation);
  };
  return IP;
};
