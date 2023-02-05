import { apiToken } from '../config/appConfig.js'

export const authenticationMiddleware = (req, res, next) => {
    if (req.header('Authorization') === apiToken)
        next()
    else
        responseService.error(res,'unauthurized.', 401)
}