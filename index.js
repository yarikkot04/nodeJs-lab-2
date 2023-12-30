import http from 'http'
import { URL } from 'url'
import { jsonSv, parseForm, xmlParse } from './utils.js'
import { router } from './router.js'
import { json } from './helpers.js'

const processedContentTypes = {
  'text/html': (text) => text,
  'application/json': (json) => jsonSv(json, {}),
  'application/xml': (xml) => xmlParse(xml),
  'multipart/form-data': (data) => parseForm(data),
  'application/x-www-form-urlencoded': (data) => {
    return Object.fromEntries(new URLSearchParams(data))
  }
}

const server = http
  .createServer((req, res) => {
    const url = new URL(req.url || '/', `http://${req.headers.host}`)
    let body = ''
    let payload = {}
    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      if (req.headers['content-type']) {
        const contentType = req.headers['content-type'].split(';')[0]
        if (processedContentTypes[contentType]) {
          payload = processedContentTypes[contentType](body)
        }
      }
      try {
        router(req, Object.assign(res, { json }), url, payload, body)
      } catch (e) {
        console.log(e)
        res.writeHead(500, {
          'Content-Type': 'text/html'
        })
        res.end('<h1>Server error</h1>')
      }
    })
  })
  .on('error', (e) => {
    console.log('Error: ', e)
  })

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})

process.on('SIGINT', () => {
  server.close((e) => {
    if (e) {
      console.log(e)
      process.exit(1)
    }
    console.log('\nServer was stopped!')
    process.exit(0)
  })
})
