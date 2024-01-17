const http = require('http')
const PORT = 8900

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('Hello Emmanuel Orhokpoke!')
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
