const express = require('express')
const Useroute = require('./routes/student.route')
const NotFound = require('./middleware/notFound')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use('/api/students' , Useroute)


// error 404 on page
app.use(NotFound)
module.exports = app