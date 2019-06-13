const express=require('express');

const router=express.Router();

const ATKTStudentMarks = require('../models/ATKTstudentmarks');
const check_auth=require('../middleware/Check-Auth');



router.get('/:semester/:year/:pattern',check_auth, async(req,res) => {
    const atktdata=await ATKTStudentMarks.find({semester:req.params.semester, year:req.params.year, pattern:req.params.pattern});
    res.json(atktdata);
})

module.exports=router;