import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'DD-MM-YYYY HH:mm:ss',
        }),
        winston.format.prettyPrint()
      ),
    }),
  ],
});

export const loggerFunc = (err = {}, path = '') => {
  if (err.response)
    logger.error({
      from: path,
      message: 'error with response',
      response: err.response.data,
    });
  else
    logger.error({
      from: path,
      response: err.message,
    });
};

export default logger;
