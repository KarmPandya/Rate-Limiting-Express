import mongoose from "mongoose";

export const PeopleSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    }
})

const People = mongoose.model("People", PeopleSchema);