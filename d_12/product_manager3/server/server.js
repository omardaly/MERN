const express = require("express")
const app = express()
const cors = require('cors')

const PORT = 8000
const DB = "fullstack_db"

app.use( express.json() ,express.urlencoded({ extended: true }),cors()) ;

require('./config/mongoose.config')(DB)
 require('./routes/product.route')(app)

app.listen(PORT,()=>console.log('>>>SERVER IS RUNNING ON PORT ${PORT}<<<'))
