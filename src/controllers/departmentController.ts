import { Request, Response, NextFunction } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getDepartments(req: Request, res: Response, next: NextFunction) {
  try {
    const department = await prisma.department.findMany({});
    return res.status(200).json(department);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function getDepartment(req: Request, res: Response, next: NextFunction) {
  const id = Number(req.params.id);

  try {
    const department = await prisma.department.findUnique({
      
      where: { id: id },
      include: {
        GroupDepartments: {
          select: {
            group: true,
          },
        },
      },
      
    });

    return res.status(200).json({ department });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

async function postDepartment(req: Request, res: Response, next: NextFunction) {
    const { name, description } = req.body;
    try {
      const department = await prisma.department.create({
        data: {
          name: name,
          description: description,
        },
      });
      return res.status(200).json(department);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async function deleteDepartment(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
  
    try {
      const department = await prisma.department.delete({
        where: { id: id },
      });
      return res.status(200).json(department);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  async function updateDepartment(req: Request, res: Response, next: NextFunction) {
    const { id, name, description } = req.body;
    try {
      const department = await prisma.department.update({
        where: { id: id },
        data: {
          name: name,
          description: description,
        },
      });
      return res.status(200).json(department);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }

  export default { getDepartments, getDepartment, postDepartment, deleteDepartment, updateDepartment}