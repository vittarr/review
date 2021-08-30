// Initializes the `reviewers` service on path `/reviewers`
const { Reviewers } = require('./reviewers.class');
const createModel = require('../../models/reviewers.model');
const hooks = require('./reviewers.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/reviewers', new Reviewers(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('reviewers');

  service.hooks(hooks);
};
