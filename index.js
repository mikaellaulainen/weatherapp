require('dotenv').config()
const express= require('express')
const app= express()
const axios= require('axios')
const http = require('http')
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
  axios.get('https://api.openweathermap.org/data/2.5/weather?lat=73&lon=26&appid=a78b8c792245041b658f746f8a71d389', {
  })
  .then(data => {
      console.log(data.data)
      res.json(data.data)
  })
})

const PORT = 3001
app.listen(PORT, () =>{
  console.log(`Server running on ${PORT}`)
})