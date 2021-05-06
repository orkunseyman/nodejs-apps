const express = require('express')
const path = require('path');
const app = express()
const weatherstack = require('./weatherstack');
app.use(express.static(path.join(__dirname, '../public')));

const port = process.env.PORT || 3000

app.set('view engine','pug')

app.get('', (req, res) => {
    res.render('index',{
        title:'home'
    })
})

app.get('/about', (req, res) => {
    res.render('about',{
        title:'about'
    })
})

app.get('/weather', (req, res) => {
    
    if (!req.query.adress) {
        return res.send({
            error:'you must provide a search term'
        })
    }

    weatherstack(req.query.adress,(error,data)=>{
        if(error){
            return res.send({error});
       }
       res.send(data)
    })

  
})

app.post('/weather',(req,res)=>{
    req.body
})

app.get('*', (req, res) => {
   res.send('404')
})



app.listen(port, () => {
    console.log('Server is up on port '+port)
})