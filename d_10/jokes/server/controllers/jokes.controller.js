const { model } = require('mongoose')
const jokesModel =require('../models/jokes.model')

model.exports.findAllJokes=(req,res)=>{
    jokesModel.find()
    .then(result=>{
        console.log("All Jokes:",result)
        res.status(200).json(result)
    })
    .catch(error=>res.status(400).json(error))
}

// module.exports.findOneJoke = (req,res) => {
//     console.log(req.params);
//     jokesModel.findById({_id:req.params.id})
//     .then(result => {
//         console.log("ONE joke FROM DB : ",result,"🎈🎈🎈🎈🎈")
//         res.status(200).json(result)
//     }
//         )
//         .catch(error=> res.status(400).json(error))
// }
    