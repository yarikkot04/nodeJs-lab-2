function defaultGET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/json'
  })
  res.json({ message: 'Default page.' })
}

export { defaultGET }
