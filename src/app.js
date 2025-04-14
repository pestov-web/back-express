const express = require('express');

const taskRoutes = require('./routes/taskRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const { logger, errorLogger } = require('./middlewares/logger');
const { errors } = require('celebrate');
const error = require('./middlewares/error');

const cors = require('cors');
const helmet = require('helmet');
const limiter = require('./middlewares/rateLimitter');

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(helmet());

//rate limiter
app.use(limiter);

app.use(express.json());

app.use('/api/ToDoList', taskRoutes, categoryRoutes);

app.use(logger);
app.use(errorLogger);

// Обработка ошибок
app.use(errors()); // Celebrate
// собственный обработчик ошибок
app.use(error);

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`ToDo service running on port ${PORT}`);
});
