import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function addVenueToGroup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { venueId, groupId } = req.body;

  try {
    const join = await prisma.groupVenues.create({
      data: {
        groupId: groupId,
        venueId: venueId,
      },
    });

    return res.status(200).json(join);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function removeVenuefromGroup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.body;

  try {
    const item = await prisma.groupVenues.delete({
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

async function getVenuesinGroup(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { groupId } = req.body;

  try {
    const venues = await prisma.groupVenues.findMany({
      where: {
        groupId: groupId,
      },
    });

    return res.status(200).json(venues);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getGroupsforVenue(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { venueId } = req.body;

  try {
    const groups = await prisma.groupVenues.findMany({
      where: {
        venueId: venueId,
      },
    });

    return res.status(200).json(groups);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export default {
  addVenueToGroup,
  removeVenuefromGroup,
  getVenuesinGroup,
  getGroupsforVenue,
};
