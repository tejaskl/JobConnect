import mongoose from "mongoose";
const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    website:[{
        type:String,
        required:true
    }],
    location:{
        type:Number
    },
    logo:{
        type:String //URL to company logo
        
    },
    userId:{
        type:mongoose.SchemaType.Types.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true});

export const Job = mongoose.model('Job', jobSchema);