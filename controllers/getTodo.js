// import the model

const Todo = require("../models/Todo");

// define the route handler

exports.getTodo = async(req,res) =>{
    try{
       // fetch all todo items from database
       
        const todos = await Todo.find({});
        // send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:todos,
                message:"todo is fetched"
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

exports.getTodoById = async(req,res)=>{
    try {
        // extract todo item basis on  id 
        const id = req.params.id;
        const todo=await Todo.findById({_id: id});
        // data for given id is not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"No data found worth given id ",
            })
        }
        
        res.status(200).json(
            {
                success:true,
                data:todo,
                message:`todo ${id} is successfully fetched`
            }
        );
    } catch (err) {
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
