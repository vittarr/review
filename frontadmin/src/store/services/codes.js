// src/store/services/codes.js
import feathersClient, {
    makeServicePlugin,
    BaseModel,
  } from "@/helpers/feathers";
  
  class Code extends BaseModel {
    constructor(data, options) {
      super(data, options);
    }
    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = "Code";
    // Define default properties here
    static instanceDefaults() {
      return {
        type: "",
        message: "",
        placeId: "",
        createdAt: "",
        updatedAt: "",
      };
    }
  }
  const servicePath = "codes";
  const servicePlugin = makeServicePlugin({
    Model: Code,
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
  