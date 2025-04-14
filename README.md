# back-express

```
pnpm i # установка зависимостей
npx prisma migrate dev --name init
npx prisma db seed # демо данные
pnpm dev # запуск в режиме разработки

npx prisma studio # администратор дб

```

4. Описание api

(GET)http://localhost:8089/api/ToDoList/GetTasks

(GET)http://localhost:8089/api/ToDoList/RemoveTask/{taskId:int}

(POST)http://localhost:8089/api/ToDoList/AddTask
{
"id":1,
"name":"taskName",
"description": "taskDescription"
"categoryId": 2
}

(POST)http://localhost:8089/api/ToDoList/UpdateTask
{
"id":1,
"name":"taskName",
"description": "taskDescription"
"categoryId": 2
}

(GET)http://localhost:8089/api/ToDoList/GetCategories

(GET)http://localhost:8089/api/ToDoList/RemoveCategory/{categoryId:int}

(POST)http://localhost:8089/api/ToDoList/AddCategory
{
"id":1,
"name":"categoryName",
"description": "categoryDescription"
}

(POST)http://localhost:8089/api/ToDoList/UpdateCategory
{
"id":1,
"name":"categoryName",
"description": "categoryDescription"
}
