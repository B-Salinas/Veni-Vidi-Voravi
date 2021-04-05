'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    },
    followedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "Users" }
    }
  }, {});
  Follow.associate = function(models) {
    Follow.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Follow;
};