require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!') 
})

app.get('/twitter', (req,res)=>{
    res.send('someshnawale')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at ram hari gopal</h1>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>You can watch video.</2>')
})
app.get('/facebook',(req,res)=>{
    res.send('<h3>Facebook logge in success...!</h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})