import { Request, Response, NextFunction } from "express";

const { Fusionclient } = require("../../services/fusionAuth");


// Accept New user info and create user through FusionClient
//TODO: Add all required fields
//TODO: Remove skipVerification for Prod
function register(req: Request, res: Response, next: NextFunction) {
  const obj = {
    applicationId: process.env.CLIENT_ID,
    user: req.body.user,
    skipVerification: true,
  };

  try {
    Fusionclient.register(obj)
      .then((response: any) => {
        res.status(response.statusCode).send(response);
      })
      .catch((err: any) => {
        console.log(err);
        res.status(err.statusCode).send(err);
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}


export default { register };