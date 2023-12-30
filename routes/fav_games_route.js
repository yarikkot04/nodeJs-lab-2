function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.json({ 1: 'Valorant', 2: 'Mount and Blade 2', 3: 'Warcraft 3' })
}

function POST(req, res, payload, body) {
  res.json(payload)
}

export { GET, POST }
