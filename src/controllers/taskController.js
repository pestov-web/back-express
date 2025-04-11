const { prisma } = require('../utils/prisma');

module.exports.addTask = async (req, res) => {
  const { name, description = null, categoryId = 0 } = req.body;
  const newTask = await prisma.tasks.create({
    data: {
      name,
      description,
      categoryId,
    },
  });
  res.send(newTask);
};

module.exports.updateTask = async (req, res) => {
  const updatedTask = await prisma.tasks.update({
    where: {
      id: req.body.id,
    },
    data: {
      name: req.body.name,
      description: req.body.description,
      categoryId: req.body.categoryId,
    },
  });
  res.send(updatedTask);
};

module.exports.removeTask = async (req, res) => {
  const removedTask = await prisma.tasks.delete({
    where: {
      id: req.params.id,
    },
  });
  res.send(removedTask);
};

module.exports.getTasks = async (req, res) => {
  const tasks = await prisma.tasks.findMany();
  res.send(tasks);
};
