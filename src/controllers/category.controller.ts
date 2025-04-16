import { Request, Response, NextFunction } from 'express';
import prisma from '../utils/prisma';

const addCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description = null } = req.body;
    const newCategory = await prisma.categories.create({
      data: {
        name,
        description,
      },
    });
    res.send(newCategory);
  } catch (error) {
    next(error);
  }
};

const updateCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedCategory = await prisma.categories.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
        description: req.body.description || null,
      },
    });
    res.send(updatedCategory);
  } catch (error) {
    next(error);
  }
};

const removeCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const removedCategory = await prisma.categories.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(removedCategory);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Categories = await prisma.categories.findMany();
    res.send(Categories);
  } catch (error) {
    next(error);
  }
};

export { addCategory, updateCategory, removeCategory, getCategories };
