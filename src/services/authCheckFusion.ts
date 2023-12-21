import { Request, Response, NextFunction } from "express";
const { Fusionclient } = require("./fusionAuth");
const jwt = require("jsonwebtoken");

// verify jwt using fusionAuth
const authCheckFusion = async (req: Request, res: Response, next: NextFunction) => {

  const { token, uid } = req.headers;

  if (!token) {
    return next(res.status(401).send({ message: "No token provided!" }));
  }

  try {
    const decoded = await Fusionclient.validateJWT(token);

    // response will come with a http status code of 200 if the token is valid
        //TODO: add back in && decoded.decoded.sub != req.userId

    if (decoded.statusCode != 200) {
      return next(res.status(401).send({ message: "Unauthorized!" }));
    }

    if (decoded.statusCode == 200) {
      return next();
    }
  } catch (err) {
    return next(res.status(401).send({ message: "Unauthorized! 2", err: err }));
  }
};

module.exports = { authCheckFusion };
