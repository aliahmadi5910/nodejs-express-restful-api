import { resolve } from 'import-meta-resolve'
import fs from 'fs'
import path from 'path'

const getFilesFromDir = async (dir, fileTypes) => {
    let filesToReturn = []

    const walkDir = (currentPath) => {
        let files = fs.readdirSync(currentPath)
        for (let i in files) {
            let curFile = path.join(currentPath, files[i])
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.basename(curFile)) != -1) {
                filesToReturn.push(curFile.replace(dir, ''))
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile)
            }
        }
    }

    walkDir(dir)

    return filesToReturn
}

const handleAutoImport = async () => {
    let routes = []

    const pathes = await getFilesFromDir('./modules', ['router.js'])

    for (const path of pathes) {
        const resolvedPath = await resolve('../../../' + path.replace('\\', '/'), import.meta.url)
        const router = await import(resolvedPath)

        routes.push(router.routes)
    }

    return routes
}

export const autoImportRoutesService = {
    import: async () => {
        return await handleAutoImport()
    }
}