function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.json({ message: 'Kotenko Yaroslav IM-13' })
}

export { GET }
