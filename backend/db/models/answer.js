'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    topicId: DataTypes.INTEGER,
    header: DataTypes.STRING,
    body: DataTypes.STRING
  }, {});
  Answer.associate = function(models) {
    // associations can be defined here
  };
  return Answer;
};