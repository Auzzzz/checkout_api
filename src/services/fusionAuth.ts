const { FusionAuthClient } = require("@fusionauth/typescript-client");
const Fusionclient = new FusionAuthClient(
  process.env.API_KEY,
  process.env.BASE_URL
);

module.exports = { Fusionclient };
