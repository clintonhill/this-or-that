'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    ipId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    answerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
  }, {});
  Vote.associate = function(models) {
    Vote.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Vote;
};
