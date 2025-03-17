const express=require('express')
const empController=require('../Controllers/employeeController')

const router=express.Router()

router.post('/addemp',empController.addEmployee)
router.get('/emplist',empController.getEmployees)
router.delete('/delemp/:id',empController.deleteEmployee)
router.put('/editemp/:id',empController.updateEmployee)

module.exports=router
