const mongoose = require('mongoose')

const companySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    organization:String,
    domainurl :String,
    email:String,
    phone:String
})
module.exports = mongoose.model('Company',companySchema)