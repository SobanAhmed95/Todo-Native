import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required: [true , "Title is required"],
            trim: true,
            index: true,
            unique: true
        },
        task:{
            type: String,
            required: [true , "Task is required"]
        }
    },
    {timestamps: true}
)

export const Todos = mongoose.model("Todos", todoSchema);