// 1- bring express Here
const express = require("express")
// the is a global variable
const PORT=8000


// 2- invoke the function express and save the return in the variable called app
 const app = express()

 //MIDDLEWARE TO MAKE
 app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
 // *************Routing************************
 const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

 //.-----CRUD------------
 //!SAME ROUTES DIFFERENT VERBS
 //!ALL SERVER ROUTES MUST START WITH /API
 // 1- READ ALL
 app.get("/api/users/",(req,res)=>{
        res.json({users,status:404})
 })
 // 1- READ ALL
 app.get("/api/users/:id",(req,res)=>{
    console.log(req.params,"**********");
    users.push(req.body)
    const {id}=req.params
        res.json(users[id])
 })

 //3- create New user
app.post("/api/users",(req,res)=>{
    console.log(req.body,"*****");
    res.json({message:"USER CREATED "})
})
//4- DELETE USER BY INDEX
app.delete("/api/users/:id",(req,res)=>{
        const{id}= req.params
        const deletedUser = users[id]
        console.log(users.splice(id,1),"------------");
        res.json ({deletedUser,message: "USER DELETED "})
})

//4- UPDATE USER BY INDEX
app.put("/api/users/:id",(req,res)=>{
    console.log(req.body);
    console.log(req.params);
    users[req.params.id]={...users[req.params.id], ...req.body}
    res.json({massage:"USER UPDATED"})
})
 // 3- run the server

 app.listen(PORT, ()=>{
    console.log(`>>>>SERVER IS RUnNING ON PORT ${PORT}<<<<<` );
 })
