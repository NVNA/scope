const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => res.render('home', { name: 'Gustavo' }))

app.listen(3000, () => console.log('Server ready'))
