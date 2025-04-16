// обработчик ошибок
import { ErrorRequestHandler } from 'express';
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ message: err.message });
    return;
  }
  res.status(500).send({ message: `ошибка сервера: ${err.message}` });

  next();
};

export default errorHandler;
