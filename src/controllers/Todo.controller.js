import { asyncHandler } from "../utils/asyncHandler.js";
import { Todos } from "../models/Todo.model.js";


const todoController = {
    get: asyncHandler(async (req ,res) => {
        const todos = await Todos.find({});

        if(!todos || todos.length === 0){
            res.status(404).send({
                isSucessfull: false,
                data: null,
                massage: "Todo Not Found"
            })
        }
        else{
            try {
                res.status(200).json({
                    isSucessfull: true,
                    data: todos,
                    massage: "Todo Get Sucessfully"
                })
            } catch (error) {
                res.status(500).json({
                    massage: `Internal Server Error: ${error}`
                })
            }
        }
    }),
    post: asyncHandler(async (req ,res) => {
        const { title , task } = req.body;

        if([title , task].some((field => !field || field.trim() === ""))){
            res.status(400).json({
                massage: "Title and Task is required"
            })
        }

        const existsTitle = await Todos.findOne({title: title})
        if(existsTitle){
            return res.status(409).send({
                isSucessfull: false,
                massage: `Title already exists`
            })
        }

        
            try {
               const createTodo = await Todos.create({ title: title , task: task})
               if(createTodo){
                res.status(201).send({
                    isSucessfull: true,
                    data: createTodo,
                    massage: "Todo created successfully"
                })
               }
            } catch (error) {
                res.status(500).send({
                    isSucessfull: false,
                    massage: `Internal Server Error: ${error.massage}`
                })
        }
    }),
    del: asyncHandler(async (req, res) => {
        const { id } = req.params;
    
        try {
            // Attempt to delete the Todo by id
            const deleteTodo = await Todos.findByIdAndDelete(id);
    
            // If the Todo doesn't exist
            if (!deleteTodo) {
                return res.status(404).json({
                    isSuccessful: false,
                    message: "Todo not found with the provided ID"
                });
            }
    
            // If deletion is successful
            return res.status(204).json({
                isSuccessful: true,
                message: "Todo deleted successfully"
            });
        } catch (error) {
            // Handle potential errors
            return res.status(500).json({
                isSuccessful: false,
                message: `Internal Server Error: ${error.message}`
            });
        }
    })
}

export { todoController }