'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    ipId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
  };
  return Vote;
};