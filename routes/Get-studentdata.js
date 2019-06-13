const express=require('express');

const router=express.Router();

const StudentData=require('../models/StudentData');
const authcheck=require('../middleware/Check-Auth');

router.get('/:semester/:year',authcheck, async(req,res) => {
    const studentdata=await StudentData.find({semester:req.params.semester, year:req.params.year});
    res.json(studentdata);
})

module.exports=router;