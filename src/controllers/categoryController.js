const { prisma } = require('../utils/prisma');

module.exports.addCategory = async (req, res) => {
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

module.exports.updateCategory = async (req, res) => {
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

module.exports.removeCategory = async (req, res) => {
  try {
    const removedCategory = await prisma.categories.delete({
      where: {
        id: req.params.id,
      },
    });
    res.send(removedCategory);
  } catch (error) {
    next(error);
  }
};

module.exports.getCategories = async (req, res) => {
  try {
    const Categories = await prisma.categories.findMany();
    res.send(Categories);
  } catch (error) {
    next(error);
  }
};
