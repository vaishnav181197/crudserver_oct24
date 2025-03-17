const mongoose=require('mongoose')


const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }
})

const employees=mongoose.model('employees',employeeSchema)

module.exports=employees