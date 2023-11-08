import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
function getHello(req: Request, res: Response, next: NextFunction) {
  res.send("Hello World! from Test Controller!");
}



async function postTest(req: Request, res: Response, next: NextFunction) {

  const { text } = req.body;

  try {
  const todo = await prisma.todo.create({
    data: {
      completed: false,
      createdAt: new Date(),
      text: text,
    },
  });

  return res.status(200).json(todo);
}
catch (error) {
  console.log(error)
  return res.status(500).json(error);
}

  // const postTestSchema = z.object({
  //   text: z.string().min(1),
  // });

  // const validate = (shema: postTestSchema)


  // res.send("Hello World! from Test Controller!");
}



export default { getHello, postTest };
