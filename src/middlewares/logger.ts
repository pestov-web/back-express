import winston from 'winston';
import expressWinston from 'express-winston';

const logger = expressWinston.logger({
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: "combined.log" }),
  ],
  format: winston.format.combine(winston.format.json()),
  meta: false,
  msg: 'HTTP {{req.method}} {{res.statusCode}} {{req.url}}',
  expressFormat: true,
  colorize: false,
  ignoreRoute: function (req, res) {
    return false;
  },
});
const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console(),
    // new winston.transports.File({ filename: "error.log" }),
  ],
  format: winston.format.combine(winston.format.json()),
  msg: '{{err.code}} {{res.statusCode}} {{req.method}} {{req.url}}',
  meta: false,
});

export { logger, errorLogger };
