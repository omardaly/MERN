const Author = require('../models/author.model')

module.exports = {
    findAll : (req,res) => {
        Author.find()
        .then(dbResponse => {
            console.log("DATABASE RESPONSE TO FIND ALL :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        } )
    },
    findOne:(req,res)=>{
        Author.findById(req.params.id)
        .then(dbResponse => {
            res.status(200).json(dbResponse)
            console.log("Response: ",dbResponse)
        })
        .catch(error => {
            res.status(400).json(error)
            console.log("Error: ",error)
        })
    },
    create:(req,res)=>{
        Author.create(req.body)
        .then(dbResponse=>{
            console.log("DATABASE RESPONSE",dbResponse);
            res.status(201).json(dbResponse);
            
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL", dbError);
            res.status(400).json(dbError.errors)
            console.log("error:",dbError);
        })
    },
    update : (req,res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError.errors)
            console.log("error:",dbError);
        })
    },
    delete : (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(dbResponse => {
            console.log("DATABASE RESPONSE  :", dbResponse );
            res.status(200).json(dbResponse)
        })
        .catch(dbError => {
            console.log("DATABASE ERROR FIND ALL :", dbError);
            res.status(400).json(dbError)
        })
    }
}