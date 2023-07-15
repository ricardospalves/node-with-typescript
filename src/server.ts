import './dotenvConfig'
import http from 'node:http'

const PORT = 3000

http.createServer().listen(PORT, () => {
  console.log(`🚀 server running on http://localhost:${PORT}`)
})
