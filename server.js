const express = require('express')
const hbs = require('hbs')
require('./helpers/helpers')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))
hbs.registerPartials(__dirname + '/views/shared')
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Daniel',
        titulo: 'Home'
    })
})

app.get('/contact', (req, res) => {
  res.render('contact',{
    nombre: 'daniel',
    titulo: 'Contact'
  })
})

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Daniel',
        titulo: 'About'
    })
})
app.listen(port, () => console.log(`Servidor: Activo - Puerto: ${port}`))