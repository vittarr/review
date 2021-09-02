const { authenticate } = require("@feathersjs/authentication").hooks;
const { setField } = require("feathers-authentication-hooks");

const { allowAnonymous, getRelated } = require("../helperhooks");

const setUserId = setField({
  from: "params.user.id",
  as: "data.userId",
});
const limitToUser = setField({
  from: "params.user.id",
  as: "params.query.userId",
});

module.exports = {
  before: {
    all: [allowAnonymous(), authenticate("jwt", "anonymous")],
    find: [getRelated()],
    get: [getRelated()],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
