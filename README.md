# ToDo List API (Express + Prisma + SQLite)

REST API для управления задачами и категориями.

## 🌟 Особенности

- **CRUD операции** для задач и категорий
- Реляционная база данных на **SQLite**
- **Prisma** в качестве ORM
- Интеграция с **Prisma Studio** для администрирования БД

## ⚙️ Требования

- Node.js v18+
- pnpm

## 🚀 Быстрый старт

### Установка и настройка

1. Клонировать репозиторий:

```bash
git clone https://github.com/pestov-web/back-express.git
cd back-express
```


2. Установить зависимости:

```bash
pnpm install
```

3. Создать файл окружения:

```bash
echo "DATABASE_URL=file:./dev.db" > .env
```

4. Выполнить миграции:

```bash
npx prisma migrate dev --name init
```

5. Заполнить тестовыми данными:

```bash
npx prisma db seed
```

### Запуск приложения

**Разработка:**

```bash
pnpm dev
```

**Продакшен:**

```bash
pnpm start
```

**Администрирование БД:**

```bash
npx prisma studio
```

## 📚 Документация API

Базовый URL: `http://localhost:8089/api/ToDoList`

### Задачи

| Метод  | Эндпоинт           | Описание             |
| ------ | ------------------ | -------------------- |
| GET    | `/GetTasks`        | Получить все задачи  |
| POST   | `/AddTask`         | Создать задачу       |
| PATCH  | `/UpdateTask`      | Обновить задачу      |
| DELETE | `/RemoveTask/{id}` | Удалить задачу по ID |

### Категории

| Метод  | Эндпоинт               | Описание                |
| ------ | ---------------------- | ----------------------- |
| GET    | `/GetCategories`       | Получить все категории  |
| POST   | `/AddCategory`         | Создать категорию       |
| PATCH  | `/UpdateCategory`      | Обновить категорию      |
| DELETE | `/RemoveCategory/{id}` | Удалить категорию по ID |

## 📝 Примеры запросов

### Создание задачи

```http
POST /AddTask
Content-Type: application/json

{
  "name": "Купить продукты",
  "description": "Молоко, хлеб, яйца",
  "categoryId": 1
}
```

### Обновление категории

```http
POST /UpdateCategory
Content-Type: application/json

{
  "id": 1,
  "name": "Домашние дела",
  "description": "Повседневные задачи по дому"
}
```

## 📊 Структура БД

```prisma
model Task {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  categoryId  Int?
  category    Category? @relation(fields: [categoryId], references: [id], onDelete: SetNull)
}

model Category {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  tasks       Task[]
}
```

## 🛠️ Дополнительные скрипты

```json
{
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js",
    "lint": "npx eslint src/**/*"
  },
  "prisma": {
    "seed": "node prisma/seed.js"
  }
}
```

- `pnpm lint` - проверить качество кода
- `pnpm dev` - запуск с hot-reload
- `pnpm start` - продакшен-режим
````
