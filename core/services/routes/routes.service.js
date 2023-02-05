import { apiPrefixV1 } from '../../config/appConfig.js'
import { routerService } from '../router/router.service.js'
import { autoImportRoutesService } from './auto-import-routes.service.js'

export const routeService = {
  registerRoutesFor: async (app) => {
    app.use(apiPrefixV1, routerService.handle(await autoImportRoutesService.import()))
  }
}