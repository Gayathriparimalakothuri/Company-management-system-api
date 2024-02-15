const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");


const Company = require('./companymodel');
const validateCompanyData = require('./validatedata');


router.get('/', (req,res,next)=>{
    Company.find().exec().then(docs =>{
        console.log(docs)
        res.status(200).json(docs)
    }).catch(err =>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
})


router.post('/postdata', validateCompanyData,(req,res,next)=>{
    const details ={
        organization:req.body.organization,
        domainurl : req.body.domainurl,
        email:req.body.email,
        phone:req.body.phone,
    }
    const entry = new Company({
        _id: new mongoose.Types.ObjectId(),
        organization:req.body.organization,
        domainurl : req.body.domainurl,
        email:req.body.email,
        phone:req.body.phone
    }) 
    entry.save().then(result =>{
        console.log(result)
        res.status(200).json({
            message:'handling post requests to /companies',
            entry:entry
        })
    }).catch(err =>{
        console.log(err)
        res.status(500).json({
            error:err
        })
    })
    
})

router.get('/:id', (req,res,next)=>{
    const id = req.params.id
    Company.findById(id).exec().then(doc =>{
        console.log("from db",doc)
        if(doc){
            res.status(200).json(doc)
        }else{
            res.status(404).json({message:'no valid entry found for id'})
        }
        
    }).catch(err =>{
        console.log(err)
        res.status(500).json({error:err})
    })
   
})
router.patch('/:id', validateCompanyData,(req, res) => {
  Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, useFindAndModify: false }
  )
    .then(updatedCompany => {
      if (!updatedCompany) {
        res.status(404).json({ error: 'Company not found' });
      } else {
        res.json(updatedCompany);
      }
    })
    .catch(error => {
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

router.delete("/:id", (req, res, next) => {
    const id = req.params.id;
    Company.findByIdAndDelete({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json({
            message:'Id has deleted'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });
  

module.exports = router