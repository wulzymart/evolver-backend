import Logger from '../config/logger.js';


export const validateRequestBody = (validationSchema) =>
(req, res, next) => {
    const logger = new Logger(validateRequestBody.name);

    const validationResult = validationSchema.validate(req.body);

    if (validationResult.error != null) {
        logger.log(validationResult.error);
        res.status(400).join(JSON.stringify(validationResult.error.details))
        return
    }

    next();
};
