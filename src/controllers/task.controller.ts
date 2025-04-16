import { Request, Response, NextFunction } from 'express';
import prisma from '../utils/prisma';

const addTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, description = null, categoryId = null } = req.body;
    const newTask = await prisma.tasks.create({
      data: {
        name,
        description,
        categoryId,
      },
    });
    res.send(newTask);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const updatedTask = await prisma.tasks.update({
      where: {
        id: req.body.id,
      },
      data: {
        name: req.body.name,
        description: req.body.description || null,
        categoryId: req.body.categoryId || null,
      },
    });
    res.send(updatedTask);
  } catch (error) {
    next(error);
  }
};

const removeTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const removedTask = await prisma.tasks.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(removedTask);
  } catch (error) {
    next(error);
  }
};

const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await prisma.tasks.findMany();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};

export { addTask, updateTask, removeTask, getTasks };
