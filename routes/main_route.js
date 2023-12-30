function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  res.end('<h1>Lab 2. Node JS</h1>')
}

function POST(req, res, payload, body) {
  res.json(payload)
}

function OPTIONS(req, res, payload, body) {
  res.writeHead(204, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  })
  res.end()
}

export { GET, POST, OPTIONS }
