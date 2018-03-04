'use strict';
module.exports = (sequelize, DataTypes) => {
  var events = sequelize.define('events', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    typo: DataTypes.STRING,
    actor_id: DataTypes.INTEGER,
    actor_login: DataTypes.INTEGER,
    avatar_url: DataTypes.TEXT,
    repo_id: DataTypes.INTEGER,
    repo_name: DataTypes.STRING,
    repo_url: DataTypes.TEXT,
    created_at: DataTypes.DATE
  }, {});
  events.associate = function(models) {
    // associations can be defined here
  };
  return events;
};