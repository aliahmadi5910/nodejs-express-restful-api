const responseService = {
    success: (res, data = null, message = 'OK', result = true, status = 200) => {
        return res.status(status).set({
            'Content-Type': 'application/json'
        }).send({
            result,
            message,
            data
        })
    },
    error: (res, message = 'Error.', status = 400, data = null, result = false) => {
        return res.status(status).set({
            'Content-Type': 'application/json'
        }).send({
            result,
            message,
            data
        })
    }
}

global.responseService = responseService

export { responseService }