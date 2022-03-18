const mongoose =  require('mongoose')

const userSchema =  new mongoose.Schema({
    name:{type:String, required:true},
    surName:{type:String, required:true},
    email:{type:String, required:true},
    password:[{type:String, required:true}],
    uniqueString:{type:String, required:true},
    emailVerificado:{type:Boolean, required:true}, 
    picture:{type:String,required:true},
    country:{type:String,required:true},

    from:{type:Array}
    
})

const User = mongoose.model('users', userSchema)
module.exports = User