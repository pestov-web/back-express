const { PrismaClient } = require('@prisma/client');
const { categories, tasks } = require('../src/utils/initialData');

const prisma = new PrismaClient();

async function main() {
  try {
    // Очистка таблиц
    const deleteTasks = await prisma.tasks.deleteMany({});
    const deleteCategories = await prisma.categories.deleteMany({});

    // Создание категорий
    const createCategories = await prisma.categories.createMany({
      data: categories,
    });

    // Получаем созданные категории с их реальными ID
    const createdCategories = await prisma.categories.findMany();

    // Обновляем categoryId в задачах с реальными ID из БД
    const tasksWithCorrectIds = tasks.map((task) => {
      const category = createdCategories.find(
        (cat) => cat.name === categories[task.categoryId - 1].name
      );
      return {
        ...task,
        categoryId: category ? category.id : null,
      };
    });

    // Создание задач с корректными categoryId
    const createTasks = await prisma.tasks.createMany({
      data: tasksWithCorrectIds,
    });

    console.log({ createTasks, createCategories });
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
