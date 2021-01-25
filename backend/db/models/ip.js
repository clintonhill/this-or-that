'use strict';
module.exports = (sequelize, DataTypes) => {
  const IP = sequelize.define('IP', {
    ipAddress: DataTypes.STRING
  }, {});
  IP.associate = function(models) {
    // associations can be defined here
  };
  return IP;
};