const express = require("express")

const PORT = 8000

const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const { faker } = require('@faker-js/faker');

const createUser =()=>{
    const newUser ={
  
        firstName: faker.person.firstName(),
        lastName :faker.person.lastName(),  
        phoneNumber:faker.phone.number(),
        email:faker.internet.email(),
        password :faker.internet.password(),
        
    };
    return newUser
}
const newUser=createUser();
console.log(newUser);




const createCompany= () => {
    const newCompany = {
        _id: faker.string.uuid(),
        name: faker.company.name(),
        address:{
        street: {
            street:faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode:faker.location.zipCode(),
            country:faker.location.country()}
        }
    };
    return newCompany;
};

app.get("/api/users/new", (req, res) => {
    res.send(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.send({user:createUser(),company:createCompany()});
});
app.get('/company',(req,res) =>
{
    res.json(createCompany())
})