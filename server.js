
const express = require("express");
const app = express();

// load config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse json request body 
app.use(express.json());

// import routes for todo app 
const todoRoutes = require("./routes/todo");
// mount the todo API routes
app.use("/api/v1",todoRoutes);

// start the server

app.listen(PORT ,()=>{
    console.log( `app  running on port ${PORT}`);
});

// Connect to the database

const dbConnect = require("./config/database");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1> this is homepage </h1`);

})

 