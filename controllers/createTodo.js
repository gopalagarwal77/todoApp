// import the model

const Todo = require("../models/Todo");

// define the route handler

exports.createTodo = async(req,res) =>{
    try{
        // extract the title and description from the request body
        const {title,description} = req.body;
        // create a new todo obj and insert in db
        const response = await Todo.create({title,description});
        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"todo created"
            }
        );


    }
    catch(err){
        console.error(err);
        console.log(err);
        return res.status(500).json(
            {
                success:false,
                data:"Internal server error ",
                message:err.message,
            }
        )

    }
}