import express from 'express'
import { responseService } from './core/services/http/response.service.js'
import { middlewareService } from './core/services/middlewares/middlware.service.js'
import { routeService } from './core/services/routes/routes.service.js'
import { port } from './core/config/appConfig.js'

const app = express()
app.use(express.json())

middlewareService.registerGlobalMiddlewaresFor(app)
routeService.registerRoutesFor(app)

app.listen(port, () => {
  console.log('server running...')
})