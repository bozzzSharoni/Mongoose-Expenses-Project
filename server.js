const express = require('express')
const path = require('path')
const request = require('request')

const app = express()

app.use(express.static(path.join(__dirname, 'server')))












const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})