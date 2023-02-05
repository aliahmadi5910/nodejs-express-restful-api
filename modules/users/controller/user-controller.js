let users = [
    {
        id: 1,
        name: "user1",
        email: "user1@gmail.com"
    },
    {
        id: 2,
        name: "user2",
        email: "user2@gmail.com"
    },
    {
        id: 3,
        name: "user3",
        email: "user3@gmail.com"
    }
]

export const userController = {
    getAllUsers: (req, res) => {
        return responseService.success(res, users)
    },
    getUser: (req, res) => {
        let findIndex = users.findIndex(user => user.id == Number(req.params.id))

        return responseService.success(res, users[findIndex])
    },
    create: (req, res) => {
        const { name, email } = req.body
        users.push({
            id: users[users.length - 1].id + 1,
            name,
            email
        })

        return responseService.success(res, users)
    },
    update: (req, res) => {
        const { name, email } = req.body

        let findIndex = users.findIndex(user => user.id === Number(req.params.id))

        if (findIndex != -1) {
            users[findIndex].name = name
            users[findIndex].email = email
        }

        return responseService.success(res, users)
    },
    delete: (req, res) => {
        let findIndex = users.findIndex(user => user.id === Number(req.params.id))

        if (findIndex != -1)
            users.splice(findIndex, 1)

        return responseService.success(res, users)
    }
}