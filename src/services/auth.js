const { Fusionclient } = require("../services/fusionAuth");
const jwt = require("jsonwebtoken");

// Check JWT Signature to verify user is authed
module.exports.isAuthed = function (req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return next(res.status(401).send({ message: "No token provided!" }));
  }

  try {
    // decode the token with the signing key
    const decoded = jwt.verify(token, process.env.AUTH_KEY);

    // if decoded response is undifined or the sub is not the same as the userId user is denied
    if (decoded.decoded === "undefined" && decoded.decoded.sub != req.userId) {
      return next(res.status(401).send({ message: "Unauthorized!" }));
    }

    next();
  } catch (err) {
    return next(res.status(401).send({ message: "Unauthorized!" }));
  }
};

// Check JWT against fusion to verify user is authed
module.exports.isAuthedFusion = async function (req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return next(res.status(401).send({ message: "Unauthorized!" }));
  }

  try {
    const decoded = await Fusionclient.validateJWT(token);

    // response will come with a http status code of 200 if the token is valid
    if (decoded.statusCode != 200 && decoded.response.userId != req.userId) {
      return next(res.status(401).send({ message: "Unauthorized!" }));
    }

    if (decoded.statusCode == 200) {
      return next();
    }
  } catch (err) {
    return next(res.status(401).send({ message: "Unauthorized!" }));
  }
};
