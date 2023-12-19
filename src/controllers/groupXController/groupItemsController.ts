import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addItemToGroup(req: Request, res: Response, next: NextFunction) {
  const { itemId, groupId } = req.body;

  try {
    const join = await prisma.groupItems.create({
      data: {
        groupId: groupId,
        itemId: itemId,
      },
    });

    return res.status(200).json(join);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function removeItemfromGroup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  try {
    const item = await prisma.groupItems.delete({
      where: {
        id: id,
      },
    });

    return res.status(200).json(item);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getItemsinGroup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { groupId } = req.body;

  try {
    const items = await prisma.groupItems.findMany({
      where: {
        groupId: groupId,
      },
    });

    return res.status(200).json(items);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getGroupsforItem(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { itemId } = req.body;

  try {
    const groups = await prisma.groupItems.findMany({
      where: {
        itemId: itemId,
      },
    });

    return res.status(200).json(groups);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export default {
  addItemToGroup,
  removeItemfromGroup,
  getItemsinGroup,
  getGroupsforItem,
};
