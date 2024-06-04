// Define quais verbos serão respondidos pela aplicação

const SequenceRoute = require("./sequenceRoute");

// Define que todos os verbos serão respondidos pelo sequenceRoute
module.exports = (app) => {
  SequenceRoute(app);
};
