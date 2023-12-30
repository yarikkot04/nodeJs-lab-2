import { defaultGET } from './routes/default_route.js'
import { fileURLToPath, pathToFileURL } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function router(req, res, url, payload, body) {
  try {
    let modulePath = ''
    const requestMethod = req.method
    const urlPath = url.pathname
    if (urlPath === '/favicon.ico') return
    const allowedRoutes = ['main', 'about', 'student', 'fav_games']
    const index = allowedRoutes.indexOf(urlPath.replace('/', ''))
    if (index >= 0) {
      const pathToFile = `routes/${allowedRoutes[index]}_route.js`
      modulePath = pathToFileURL(path.resolve(__dirname, pathToFile))
    } else {
      return defaultGET(req, res, payload, body)
    }
    switch (requestMethod) {
      case 'GET': {
        const { GET } = await import(modulePath)
        GET(req, res, payload, body)
        break
      }
      case 'POST': {
        const { POST } = await import(modulePath)
        POST(req, res, payload, body)
        break
      }
      case 'OPTIONS': {
        const { OPTIONS } = await import(modulePath)
        OPTIONS(req, res, payload, body)
        break
      }
      default: {
        res.writeHead(405, {
          'Content-Type': 'text/html'
        })
        res.end('<h1>Method Not Allowed</h1>')
        break
      }
    }
  } catch (e) {
    console.log(e)
    res.writeHead(500, {
      'Content-Type': 'text/html'
    })
    res.end('<h1>Server error</h1>')
  }
}

export { router }
