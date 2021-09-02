// src/store/services/users.js
import feathersClient, {
  makeServicePlugin,
  BaseModel,
} from "@/helpers/feathers";

class Place extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "Place";
  // Define default properties here
  static instanceDefaults() {
    return {
      name: "",
      address: "",
      phone: "",
      description: "",
      userId: "",
      createdAt: "",
      updatedAt: "",
    };
  }
}
const servicePath = "places";
const servicePlugin = makeServicePlugin({
  Model: Place,
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
