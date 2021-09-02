// src/store/services/reviews.js
import feathersClient, {
    makeServicePlugin,
    BaseModel,
  } from "@/helpers/feathers";
  
  class Reviewer extends BaseModel {
    constructor(data, options) {
      super(data, options);
    }
    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = "Reviewer";
    // Define default properties here
    static instanceDefaults() {
      return {
        phone: "",
        reviewId: "",
        createdAt: "",
        updatedAt: "",
      };
    }
  }
  const servicePath = "reviewers";
  const servicePlugin = makeServicePlugin({
    Model: Reviewer,
    service: feathersClient.service(servicePath),
    servicePath,
    debug: true,
  });
  
  // Setup the client-side Feathers hooks.
  feathersClient.service(servicePath).hooks({
    before: {
      all: [],
      find: [],
      get: [],
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
  });
  
  export default servicePlugin;
  