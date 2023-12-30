function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.json({ message: 'Kotenko Yaroslav IM-13' })
}

function POST(req, res, payload, body) {
  res.json(payload)
}

export { GET, POST }
