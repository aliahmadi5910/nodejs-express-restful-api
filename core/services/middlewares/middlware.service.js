import {authenticationMiddleware} from "../../middlewares/auth.middleware.js"
import {httpMiddleware} from "../../middlewares/http.middleware.js"

export const middlewareService = {
    registerGlobalMiddlewaresFor: (app) => {
        app.use('/', httpMiddleware)
        app.use('/', authenticationMiddleware)
    }
}