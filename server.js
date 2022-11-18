const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('<h1> Hello World! - welcome to my project </h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
