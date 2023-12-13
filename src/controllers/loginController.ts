import { Request, Response, NextFunction } from "express";

const { Fusionclient } = require("../services/fusionAuth");

// Accept Login ID and Password, return JWT through FusionClient
function login(req: Request, res: Response, next: NextFunction) {
  const obj = {
    applicationId: process.env.CLIENT_ID,
    loginId: req.body.loginId,
    password: req.body.password,
  };

  try {
    Fusionclient.login(obj)
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

// Accept Refresh Token, return JWT through FusionClient
function loginRefresh(req: Request, res: Response, next: NextFunction) {
  const obj = {
    applicationId: process.env.CLIENT_ID,
    refreshToken: req.body.refreshToken,
  };

  try {
    Fusionclient.refreshToken(obj)
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

// Validate JWT through FusionClient
function loginValidate(req: Request, res: Response, next: NextFunction) {
  try {
    Fusionclient.validateJWT(req.body.token)
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

// Logout through FusionClient
function logout(req: Request, res: Response, next: NextFunction) {
  try {
    Fusionclient.logout(req.body.token)
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

export default { login, loginRefresh, loginValidate, logout };
