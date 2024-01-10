const http = require('http')
const PORT = 8900

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('Hello Emmanuel Orhokpoke!')
    res.end()
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('Opps, Page nor found!')
    res.end('Page not found')
  }
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
