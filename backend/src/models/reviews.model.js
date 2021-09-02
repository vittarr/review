// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

const { nanoid } = require('nanoid')

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const reviews = sequelizeClient.define('reviews', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      defaultValue: () => nanoid(10)
    },
    review: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment: {
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
  reviews.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    reviews.belongsTo(models.codes)
    reviews.hasMany(models.reviewers)
  };

  return reviews;
};
