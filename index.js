require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World by somesh.') 
})

app.get('/twitter', (req,res)=>{
    res.send('somesh nawale now on the twitter...!')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at ram hari gopal for the browser view</h1>')
})

app.get('/youtube', (req,res) =>{
    res.send('<h2>You can watch video.</h2>')
})
app.get('/facebook',(req,res)=>{
    res.send('<h3>Facebook logge in success...!</h3>')
})
app.get('/instagram',(req,res)=>{
  res.send('<h1>Logged in Instagram.<h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})