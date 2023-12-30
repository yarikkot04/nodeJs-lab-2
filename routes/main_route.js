function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  res.end('<h1>Lab 2. Node JS</h1>')
}

function POST(req, res, payload, body) {
  res.json(payload)
}

export { GET, POST }
