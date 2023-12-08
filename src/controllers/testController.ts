import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
// const { FusionAuthClient } = require('@fusionauth/typescript-client')
// const client = new FusionAuthClient(
//     'FaGpz8LRlHNRwTSAfCtn2NW6OpXy4h4C-JMXi6I1TxWoQzdbokGYiV5C',
//     'http://67.219.108.122:9011'
    
// )

const {Fusionclient} = require('../services/fusionAuth')

const prisma = new PrismaClient();
function getHello(req: Request, res: Response, next: NextFunction) {
  res.send("Hello World! from Test Controller!");
}

function fusionTest(req: Request, res: Response, next: NextFunction) {

  Fusionclient.retrieveUserByEmail("dev@downunderaussie.com").then((response: any) => {
    console.log(response);
    res.send(response);
  }).catch((err: any) => {
    console.log(err);
    res.send(err);

  })

}
 
function fusionValidateToken (req: Request, res: Response, next: NextFunction) {
  Fusionclient.validateJWT(req.body.token).then((response: any) => {
    console.log(response);
    res.send(response);
  }).catch((err: any) => {
    console.log(err);
    res.send(err);
  })

}

function fusionLoginTest(req: Request, res: Response, next: NextFunction) {
  const obj = {
    "applicationId": "4742477a-5fa5-4aa0-8077-6618a8e82b64",
    "loginId": "test@downunderdev.com",
    "password": 'testtest'
  }

  Fusionclient.login(obj).then((response: any) => {
    console.log(response);
    res.send(response);
  }).catch((err: any) => {
    console.log(err);
    res.send(err);
  })
}





// async function postTest(req: Request, res: Response, next: NextFunction) {
//   const { text } = req.body;

//   try {
//     const todo = await prisma.todo.create({
//       data: {
//         completed: false,
//         createdAt: new Date(),
//         text: text,
//       },
//     });

//     return res.status(200).json(todo);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json(error);
//   }
// }

function fusionHello(req: Request, res: Response, next: NextFunction) {
  res.send("Hello From Fusion!");
}

function fusionPanic(req: Request, res: Response, next: NextFunction) {
  res.send({ message: "We've called the police!" });
}

function fusionRole(req: Request, res: Response, next: NextFunction) {
  const { amount } = req.body;

  const result = { total: 0, nickels: 0, pennies: 0 };
  result.total = Math.trunc(parseFloat(amount) * 100) / 100;
  result.nickels = Math.floor(amount / 0.05);
  const pennies = (amount - 0.05 * result.nickels) / 0.01;
  result.pennies = Math.ceil(Math.trunc(pennies * 100) / 100);
  const error = !/^(\d+(\.\d*)?|\.\d+)$/.test(amount);
  if (error)
    return res
      .status(400)
      .json({ error: 'Invalid or missing "total" parameter' });
  res.json(result);
}

export default { getHello, fusionHello, fusionPanic, fusionRole, fusionTest, fusionLoginTest, fusionValidateToken };
