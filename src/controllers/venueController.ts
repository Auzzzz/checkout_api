import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
// function getHello(req: Request, res: Response, next: NextFunction) {
//   res.send("Hello World! from Venue Controller!");
// }

async function getVenues(req: Request, res: Response, next: NextFunction) {
  try {
    const venues = await prisma.venues.findMany({});
    return res.status(200).json(venues);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getVenue(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;
  try {
    const venue = await prisma.venues.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
      },
    });
    return res.status(200).json(venue);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function postVenues(req: Request, res: Response, next: NextFunction) {
  const { name, desc } = req.body;
  try {
    const venue = await prisma.venues.create({
      data: {
        name: name,
        description: desc,
      },
    });
    return res.status(200).json(venue);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function deleteVenue(req: Request, res: Response, next: NextFunction) {
  const { id } = req.body;

  try {
    const venue = await prisma.venues.delete({
      where: { id: id },
    });
    return res.status(200).json(venue);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function updateVenue(req: Request, res: Response, next: NextFunction) {
    const { id, name, desc } = req.body;
    try {
        const venue = await prisma.venues.update({
        where: { id: id },
        data: {
            name: name,
            description: desc,
        },
        });
        return res.status(200).json(venue);
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
    }

export default { getVenue, getVenues, postVenues, deleteVenue, updateVenue };
