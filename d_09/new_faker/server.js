const express = require("express")
const PORT = 8000
const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const faker = require('@faker-js/faker');

const createUser = ()=>{
    newUser={
       firstName: faker.person.firstName(),
        lastName :faker.person.lastName(),  
        phoneNumber:faker.phone.number(),
        email:faker.internet.email(),
        password :faker.internet.password(),
    };
    return newUser
}

const newUser=createUser()
console.log(newUser);

app.get("/api/newUser",(req,res)=>{
    res.send(createUser())
})