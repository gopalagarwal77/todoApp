// import the model
const Todo = require("../models/Todo");

// define the route handler

exports.updateTodo = async(req,res) =>{
    try{
        // extract the id from the request body
        const {id} = req.params;
        // extract the title and description from the request body

        const {title,description} = req.body;
        // create a new todo obj and insert in db
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt: Date.now()}
            );
        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:"updated successfully"
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