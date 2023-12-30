function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/xml'
  })
  res.end(
    '<response><message>The small http server with router without using any framework.</message></response>'
  )
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
