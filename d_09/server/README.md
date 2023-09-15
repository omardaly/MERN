touch (ni) server.js
npm init -y
npm install express
touch .gitignore
put node_modules in gitignore
got to server.js
paste the express boilerplate

//////////////////////////////////////////

// 1- bring express Here
const express = require("express")
// the is a global variable
const PORT=8000


// 2- invoke the function express and save the return in the variable called app
 const app = express()


 // 3- run the server

 app.listen(PORT, ()=>{
    console.log(`>>>>SERVER IS RUnNING ON PORT ${PORT}<<<<<` );
 })
