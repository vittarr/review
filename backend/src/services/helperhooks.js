/* eslint-disable require-atomic-updates */
const allowAnonymous = function (options = {}) {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { params } = context;

    if (params.provider && !params.authentication) {
      context.params = {
        ...params,
        authentication: {
          strategy: "anonymous",
        },
      };
    }

    return context;
  };
};

// https://medium.com/@mohammedalrowad/feathersjs-association-hooks-with-sequelize-1825356b1843
const getRelated = function (options = {}) {
  return async (context) => {
    const sequelize = context.app.get("sequelizeClient");
    const { places } = sequelize.models;
    context.params.sequelize = {
      include: [{ model: places }],
      //raw: false,
    };
    return context;
  };
};

const inclTbl =  (context) => {
  const AssociatedModel = context.app.services.places.Model;
  context.params.sequelize = {
    include: [{ model: AssociatedModel }],
  };
  return context;

};


module.exports = {
  allowAnonymous,
  getRelated
};
