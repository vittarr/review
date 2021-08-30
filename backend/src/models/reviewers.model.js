// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { nanoid } = require('nanoid')

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const reviewers = sequelizeClient.define('reviewers', {
    ID: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => nanoid(10)
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  reviewers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    reviewers.belongsTo(models.reviews)
  };

  return reviewers;
};
