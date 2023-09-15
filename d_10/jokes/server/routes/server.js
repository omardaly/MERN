const express = require("express")

const app =  express()

//  * Middleware = Json
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
require('./config/mongoose.config')

const jokesRoutes = require('./routes/jokes.routes')
jokesRoutes(app)
// require('./routes/students.routes')(app)
app.listen(8000, ()=> {console.log("SERVER IS RUNNING ON PORT 8000");}
)