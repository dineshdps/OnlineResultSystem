const express=require('express');

const router=express.Router();

const DropStudentMarks = require('../models/Dropstudentmarks');
const check_auth=require('../middleware/Check-Auth');



router.get('/:semester/:year/:pattern',check_auth, async(req,res) => {
    const dropdata=await DropStudentMarks.find({semester:req.params.semester, year:req.params.year, pattern:req.params.pattern});
    res.json(dropdata);
})

module.exports=router;