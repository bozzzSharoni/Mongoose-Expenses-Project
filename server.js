const express = require('express')
const path = require('path')
const request = require('request')
const expenses = require('./expenses.json')
const app = express()
const expense = require('./server/routes/model/Expense')
app.use(express.static(path.join(__dirname, './server')))



//Added the data to dataBase
/* for(let e of expenses){
    let e1 = new expense(e)
    e1.save()
}  


 */










const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})