import express from 'express';
import taskRoutes from './routes/task.route';
import categoryRoutes from './routes/category.route';

const { logger, errorLogger } = require('./middlewares/logger');
import { errors } from 'celebrate';
import error from './middlewares/error';

import cors from 'cors';
import helmet from 'helmet';
// import limiter from './middlewares/rateLimitter';

const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);

app.use(helmet());

//rate limiter
// app.use(limiter);

app.use(express.json());

app.use(logger);

app.use('/api/ToDoList', taskRoutes, categoryRoutes);

app.use(errorLogger);

// Обработка ошибок
// app.use(errors()); // Celebrate
// собственный обработчик ошибок
app.use(error);

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`ToDo service running on port ${PORT}`);
});
