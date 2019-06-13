const express=require('express');
const router=express.Router();
const SubjectFormat=require('../models/Subjectdata');
const check_auth=require('../middleware/Check-Auth');


router.get('/:semester/:year',check_auth, async(req,res) => {
    const subjectformat=await SubjectFormat.find({semester:req.params.semester, year:req.params.year});
    res.json(subjectformat);
})

module.exports=router;