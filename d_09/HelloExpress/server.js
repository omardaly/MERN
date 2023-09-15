// Bring the package express
const express = require("express");

const app = express();

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});
app.get("/" ,(requestObject, responseObject)=>{
    responseObject.send("HELLO EXPRESS")})
const myCallbackFunction =(req,res)=>{
res.send("Hi FROM CALLBACK FUNCTION")}
app.get("/callback_function")

app.get("api/json",(req,req)=>{
    res.json({message:"HELLO FROM JSON",status:"ok",code:200})
})
// RUB the server 
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
