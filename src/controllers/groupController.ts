import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getGroups(req: Request, res: Response, next: NextFunction) {
  try {
    const groups = await prisma.groups.findMany({});
    return res.status(200).json(groups);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getGroup(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;

  try {
    const groups = await prisma.groups.findUnique({
      where: { id: id },
    });

    return res.status(200).json({groups});
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function createGroup(req: Request, res: Response, next: NextFunction) {
    const { name, description } = req.body;
    try {
      const groups = await prisma.groups.create({
        data: {
          name: name,
          description: description,
        },
      });
      return res.status(200).json(groups);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async function deleteGroup(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
  
    try {
      const groups = await prisma.groups.delete({
        where: { id: id },
      });
      return res.status(200).json(groups);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async function updateGroup(req: Request, res: Response, next: NextFunction) {
    const { id, name, description } = req.body;
    try {
      const groups = await prisma.groups.update({
        where: { id: id },
        data: {
          name: name,
          description: description,
        },
      });
      return res.status(200).json(groups);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }


  async function addGroupMember(req: Request, res: Response, next: NextFunction) {return res.status(500).json("not made yet fool");}
  async function removeGroupMember(req: Request, res: Response, next: NextFunction) {return res.status(500).json("not made yet fool");}

  export default { getGroup, getGroups, createGroup, deleteGroup, updateGroup, addGroupMember, removeGroupMember}