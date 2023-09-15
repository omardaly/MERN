const { response, request } = require('express');
const product = require('../models/product.model');


module.exports ={
    createProduct: (req,res)=>{
        product.create(req.body)
        .then(response=>res.status(200).json(response))
        .catch(error=>res.status(400).json(error))

    },

findAllProduct:(req,res)=>{
    product.find()
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(400).json(error))
},

findOneProduct:(req,res)=>{
    product.findOne({_id:req.params.id})
    .then(response=>res.status(200).json(response))
    .catch(error=>res.status(404).json(error))
},
updateProduct :(req,res)=>{
    product.findOneAndUpdate({_id:request.params.id},request.body,{new:true})
    .then(updateProduct=>response.json(updateProduct))
    .catch(error=>response.json(error))
},

}