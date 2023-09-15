const mongoose = require('mongoose');


const jokesSchema=new mongoose.Schema({
    setup:string,
    punchline:string
},)
const jokes=mongoose.model('jokes',jokesSchema)
mongoose.model.exports=jokes