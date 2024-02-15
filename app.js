const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const companyroutes = require('./api/companyapi')

//mongoose.connect("mongodburl",{useNewUrlParser: true, useUnifiedTopology: true})



mongoose.Promise = global.Promise
app.use(cors())
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-with,Content-Type,Accept,Authorization')
    if(req.method === 'OPTIONS'){
        res.Header('Access-Control-Allow-Headers','GET,PUT,POST,PATCH,DELETE')
        res.status(200).json({})
    }
    next()
})


app.use('/companies',companyroutes)

app.use((req,res,next)=>{
    const error = new Error('not found')
    error.status = 404
    next(error)
})

app.use((error, req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports = app