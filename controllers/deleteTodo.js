// import the model

const Todo = require("../models/Todo");

// define the route handler

exports.deleteTodo = async(req,res) =>{
    try{
        // extract the id from the request body
        const {id} = req.params;
        // create a new todo obj and insert in db
         await Todo.findByIdAndDelete(id);
        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                message:"todo deleted"
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