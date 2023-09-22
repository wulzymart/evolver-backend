const infoLogRotationTransport = new DailyRotateFile({
    filename: './/logs//info',
    datePattern: 'YYYY-MM-DD-HH:MM',
    zippedArchive: true,
    maxSize: '10m',
    maxFiles: '80d',
    level: 'info',
    extension: '.log',
});

const errorLogRotationTransport = new DailyRotateFile({
    filename: './/logs//error',
    datePattern: 'YYYY-MM-DD-HH:MM',
    zippedArchive: true,
    maxSize: '10m',
    maxFiles: '80d',
    level: 'error',
    extension: '.log',
});

const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        infoLogRotationTransport,
        errorLogRotationTransport,
        new winston.transports.Console(),
    ],
});

export default class Logger {
    #defaultContext;


    constructor(defaultContext) {
        this.#defaultContext = defaultContext
    }

    static log(message, context) {
        logger.info(message, {label: context});
    }

    static error(err) {
        logger.error(err);
    }

    log(message, context) {
        logger.info(message, {label: context ?? this.#defaultContext});
    }

    error(err) {
        logger.error(err);
    }
}
