const express = require('express')
const Useroute = require('./routes/student.route')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use('/api/students' , Useroute)

module.exports = app