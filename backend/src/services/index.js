const users = require('./users/users.service.js');
const places = require('./places/places.service.js');
const codes = require('./codes/codes.service.js');
const reviews = require('./reviews/reviews.service.js');
const reviewers = require('./reviewers/reviewers.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(places);
  app.configure(codes);
  app.configure(reviews);
  app.configure(reviewers);
};
