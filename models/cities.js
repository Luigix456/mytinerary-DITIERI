const mongoose = require("mongoose")

const citiesSchema = new mongoose.Schema({
    name:{type:String, required:true},
    description:{type:String, required:true},
    continent:{type:String, required:true}
})

const cities = mongoose.model('cities', citiesSchema)
module.exports = cities