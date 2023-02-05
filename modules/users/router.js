import { userController } from './controller/user-controller.js'

const prefix = '/users'

export const routes = [
    {
        method: 'get',
        path: prefix,
        handler: userController.getAllUsers
    }, 
    {
        method: 'get',
        path: prefix + '/:id',
        handler: userController.getUser
    },
    {
        method: 'post',
        path: prefix,
        handler: userController.create
    },
    {
        method: 'put',
        path: prefix + '/:id',
        handler: userController.update
    },
    {
        method: 'delete',
        path: prefix + '/:id',
        handler: userController.delete
    }
]
