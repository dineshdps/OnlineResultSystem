const express=require('express');

const router=express.Router();

const RegularStudentMarks = require('../models/Regularstudentmarks');
const check_auth=require('../middleware/Check-Auth');


try{
    router.get('/:semester/:year/:pattern',check_auth, async(req,res) => {
        const regulardata=await RegularStudentMarks.find({semester:req.params.semester, year:req.params.year, pattern:req.params.pattern});
        res.json(regulardata);
    });
}catch(error)
{
    res.json({message:'result not created'});
}


module.exports=router;