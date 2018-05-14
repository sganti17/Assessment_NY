const express = require('express')
const path = require('path')
const app = express()
var mongoose = require('mongoose')
//import and use mongoose module
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds063869.mlab.com:63869/articledata')

var db = mongoose.connection

db.on('error',function(){
	console.log('DB Connection Error')
})

db.on('open',function(){
	console.log('DB Connection Established')
})

app.use(express.static(path.join(__dirname, 'articles', 'build')))

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'articles','build', 'index.html'))
})

app.get('/getArticles', (req, res) => {
  //go amnd get from database
  Article.findAll()
})

app.listen(9000)
