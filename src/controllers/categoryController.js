const { prisma } = require('../utils/prisma');

module.exports.addCategory = async (req, res) => {
  const { name, description = null } = req.body;
  const newCategory = await prisma.categories.create({
    data: {
      name,
      description,
    },
  });
  res.send(newCategory);
};

module.exports.updateCategory = async (req, res) => {
  const updatedCategory = await prisma.categories.update({
    where: {
      id: req.body.id,
    },
    data: {
      name: req.body.name,
      description: req.body.description,
    },
  });
  res.send(updatedCategory);
};

module.exports.removeCategory = async (req, res) => {
  const removedCategory = await prisma.categories.delete({
    where: {
      id: req.params.id,
    },
  });
  res.send(removedCategory);
};

module.exports.getCategories = async (req, res) => {
  const Categories = await prisma.categories.findMany();
  res.send(Categories);
};
