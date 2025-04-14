const { prisma } = require('../utils/prisma');

module.exports.addTask = async (req, res) => {
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

module.exports.updateTask = async (req, res) => {
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

module.exports.removeTask = async (req, res, next) => {
  try {
    const removedTask = await prisma.tasks.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send(removedTask);
  } catch (error) {
    next(error);
  }
};

module.exports.getTasks = async (req, res) => {
  try {
    const tasks = await prisma.tasks.findMany();
    res.send(tasks);
  } catch (error) {
    next(error);
  }
};
