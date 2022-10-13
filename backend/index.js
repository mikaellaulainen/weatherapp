require('dotenv').config()
const cors = require('cors')
const http = require('http')
const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/api/:city',async (request,response,next) => {
  const city = request.params.city
  console.log(city)
  const result=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_key}`)
  response.json(result.data)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`)
})