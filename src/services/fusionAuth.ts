const { FusionAuthClient } = require("@fusionauth/typescript-client");
const Fusionclient = new FusionAuthClient(
  "SbPIpPVDai2eFwpYTP0w9RtcMT_AvAPxbSmzmnKCfWMrbz2hCsc1Gs3K",
  "http://localhost:9011"
);

module.exports = { Fusionclient };
