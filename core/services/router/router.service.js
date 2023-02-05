import express from 'express'

const router = express.Router()

export const routerService = {
    handle: (routesArray) => {
        routesArray.forEach(routes => {

            routes.forEach(route => {
                const path = route.path
                const handler = route.handler

                switch (route.method) {
                    case 'get':
                    case 'middleware':
                        router.get(path, handler)
                        break
                    case 'post':
                        router.post(path, handler)
                        break
                    case 'put':
                        router.put(path, handler)
                        break
                    case 'delete':
                        router.delete(path, handler)
                        break
                }
            })

        })

        return router
    }
}