const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/expense', { useNewUrlParser: true })

const expenseSchema = new Schema({
    name: String,
    amount: Number,
    date: Date,
    group: String
})

const expense = mongoose.model('expense', expenseSchema)

module.exports = expense