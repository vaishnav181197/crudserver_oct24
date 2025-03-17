const employees=require('../Models/employeeModel')


exports.addEmployee=async(req,res)=>{
    try{
        const {name,department,salary,phone}=req.body
        const exist=await employees.findOne({phone})
        if(exist){
            res.status(406).json("Employee already exists!!")
        }
        else{
            const newEmp=new employees({name,department,salary,phone})
            await newEmp.save()
            res.status(200).json(newEmp)
        }
    }
    catch(err){
        console.log(err)
        res.status(400).json(rr)
    }
    
}


exports.getEmployees=async(req,res)=>{
    try{
        const employeelist=await employees.find()
        res.status(200).json(employeelist)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

exports.deleteEmployee=async(req,res)=>{
    try{
        const {id}=req.params
        const result=await employees.findByIdAndDelete(id)
        res.status(200).json("Deleted")
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}


exports.updateEmployee=async(req,res)=>{
    try{
        const {id}=req.params
        const {name,department,salary,phone}=req.body
        const result=await employees.findByIdAndUpdate(id,{name,department,salary,phone})
        res.status(200).json(result)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}