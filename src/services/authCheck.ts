import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

// verify jwt
//TODO: add force change password
const authCheck = (req: Request, res: Response, next: NextFunction) => {
  const { token, uid } = req.headers;

  // console.log(req)

  if (!token) {
    return next(res.status(401).send({ message: "No token provided!" }));
  }

  try {
    // decode the token with the signing key
    // const decoded = jwt.verify(token, "process.env.AUTH_KEY");

    console.log(jwt.verify(token, process.env.AUTH_KEY , { algorithms: ['HS256'] }))

    const decoded = jwt.verify(token, process.env.AUTH_KEY , { algorithms: ['HS256'] });  

    // if decoded response is undifined or the sub is not the same as the userId user is denied
    //TODO: add back in && decoded.decoded.sub != req.userId
    if (decoded.decoded === "undefined") {
      return next(res.status(401).send({ message: "Unauthorized! 1" }));
    }

    if (decoded.sub != uid) {
      return next(res.status(401).send({ message: "Unauthorized! 2" }));
    }
    next();
    // return next(res.status(401).send({ message: "Unauthorized! 3" }));
  } catch (err) {
    return next(res.status(401).send({ message: "Unauthorized! 3", err: err }));
  }
};

module.exports = { authCheck };
