const { prisma } = require('../utils/prisma');

module.exports.addTask = async (req, res) => {
  const { name, description = null, categoryId = null } = req.body;
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
  console.log(req.body);
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
