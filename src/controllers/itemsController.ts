import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getItems(req: Request, res: Response, next: NextFunction) {
  try {
    const items = await prisma.items.findMany({});
    return res.status(200).json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getItem(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  try {
    const item = await prisma.items.findUnique({
      where: { id: id },
      include: {
        GroupItems: {
          select: {
            group: true,
          }
        },
      },
      
    });

    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function postItem(req: Request, res: Response, next: NextFunction) {
    const { name, description } = req.body;
    try {
      const item = await prisma.items.create({
        data: {
          name: name,
          description: description,
        },
      });
      return res.status(200).json(item);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async function deleteItem(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
  
    try {
      const item = await prisma.items.delete({
        where: { id: id },
      });
      return res.status(200).json(item);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async function updateItem(req: Request, res: Response, next: NextFunction) {
    const { id, name, description } = req.body;
    try {
      const item = await prisma.items.update({
        where: { id: id },
        data: {
          name: name,
          description: description,
          


        },
      });
      return res.status(200).json(item);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  export default { getItem, getItems, postItem, deleteItem, updateItem}