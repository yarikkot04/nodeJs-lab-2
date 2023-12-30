function GET(req, res, payload, body) {
  res.writeHead(200, {
    'Content-type': 'application/xml'
  })
  res.end(
    '<response><message>The small http server with router without using any framework.</message></response>'
  )
}

export { GET }
